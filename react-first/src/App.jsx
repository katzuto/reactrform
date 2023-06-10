import React, {useState} from "react";
import "./App.css"
import ModalWindowLogin from "./components/ModalWindowLogin/ModalWindowLogin.jsx";
import ButtonPopUpLoginForm from "./components/buttonPopUpLoginForm/ButtonPopUpLoginForm.jsx";
import ModalSuccess from "./components/SuccessAutorize/ModalSuccess.jsx";



function App() {
    const [openPopUp, setOpenPopUp] = useState(false)
    const [submitE, setSubmit] = useState(false)
  return (
    <div className="container">
        {!openPopUp && <ButtonPopUpLoginForm openModal={setOpenPopUp}/>}
        {openPopUp && <ModalWindowLogin/>}
        {/*<ModalSuccess/>*/}
    </div>
  )
}

export default App
