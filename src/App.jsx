import FirstPage from "./components/first-page";
import NavBar from "./components/navbar";
import SecondPage from "./components/second-page";
import { BrowserRouter, Link,Route, Routes } from "react-router-dom";
function App() {
  return(
      <>
        {/* <FirstPage /> */}
        <BrowserRouter>
        
          <Routes>
          <Route exact path="/" element = {<FirstPage />} />
          <Route path='/detail' element = {<SecondPage />} />
        </Routes>
        </BrowserRouter>      
      </>
      
  );
}

export default App
