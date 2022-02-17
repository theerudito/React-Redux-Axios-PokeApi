import axios from "axios"

// Constantes recibe el estado de reduce 
const datoInicial = {
  // vamos a iniciar con un array puede ser objeto
  array: [],
  offset: 0
}

// esto es el types podriamos crear un error tambien
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"
const SIGUIENTES_POKEMONES_EXITO = "SIGUIENTES_POKEMONES_EXITO"

// Reduces - acepta la lista y envia a una constante
export default function pokeReducer (state = datoInicial, action) {
 switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
        return {...state, array: action.payload}
    case  SIGUIENTES_POKEMONES_EXITO: 
        return {...state, array: action.payload.array, offset: action.payload.offset}
    default:
        return state
 }
}

// Acciones Consume la Api
// porque usamos dos funciones flecha
// porque el la primera vamos a retornar los parametros de obtener
// la segunda funcion flecha necesita si parametors
// con dispache activamos el reducer y el gettate obtenemos la data
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
    //console.log("getState", getState().pokemones.offset);
    const {offset} = getState().pokemones
  try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      dispatch({
        type: OBTENER_POKEMONES_EXITO,
        payload: res.data.results
      })
    } catch (error) {
      console.log(error);
    }
}

export const siguientePokemonAccion = (numero) => async (dispatch, getState) => {
  const {offset} = getState().pokemones 
  const siguiente = offset + numero
  try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
      dispatch({
        type: SIGUIENTES_POKEMONES_EXITO,
        payload: {
          array: res.data.results,
          offset: siguiente
        }
      })
    } catch (error) {
      console.log(error);
    }
}