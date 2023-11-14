import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Page1' element={<Page1 />}></Route>
                <Route path='/Page2' element={<Page2 />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
