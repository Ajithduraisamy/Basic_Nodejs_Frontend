import {BrowserRouter,Routes,Route} from "react-router-dom"
import List from "./List"
import Create from "./Create"
import Edit from "./Edit"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
