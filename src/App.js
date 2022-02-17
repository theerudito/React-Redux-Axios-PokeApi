import './App.css';
import Pokemones from './Componetes/Pokemones';

// PARA ENVOLVER COMPONETES
import {Provider} from 'react-redux'
// importamos nuetra tienda
import Store from "./Redux/Store"

function App() {

  // nuestras tienda
  const store = Store()

  return (
     <Provider store={store}>
        <Pokemones/>
     </Provider>
  
  );
}

export default App;

