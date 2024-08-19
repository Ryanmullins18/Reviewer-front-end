import {Routes, Route} from 'react-router-dom'
import Items from './Components/Items';
import NavBar from './components/NavBar';

import './App.css'
import Register from './Components/Register'

function App() {
  return(
    <div>
      <NavBar />
      <h1>Best Reviews</h1>
      <Routes>
        <Route path='/register' element={<Register />}/>
        {/* <Route path='/login' /> */}
        <Route path='/items' element={<Items />} />
      </Routes>
    </div>
  )
  
}

export default App
