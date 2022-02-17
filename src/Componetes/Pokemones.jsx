import React from 'react'

// hooks react redux
// useDispach - nos sirve para consumir nuestra accion
// useSelector -para leer el array o state principal
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerPokemonesAccion, siguientePokemonAccion} from '../Redux/PokeDucks'

const Pokemones = () => {
  const dispatch = useDispatch()
  const pokemones = useSelector(store => store. pokemones.array)
  console.log(pokemones);
  return (
    <div className='container w-25'>
      <button className='btn btn-primary m-3 ' onClick={() => dispatch(obtenerPokemonesAccion())}>Obtener Pokemones</button>
      <button className='btn btn-primary' onClick={() => dispatch(siguientePokemonAccion(20))}>Siguiente</button>
        <table className='table table-dark table-hover container'>
          <thead>
              <tr>
                  <th>Name</th>
              </tr>
          </thead>
          <tbody>
             {
              pokemones.map(item => (
                <tr key={item.name}> 
                  <td>{item.name}</td> 
                </tr>  
              ))
             }
          </tbody>
        </table>
    </div>
  )
}

export default Pokemones