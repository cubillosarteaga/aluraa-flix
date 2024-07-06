import React from "react";
import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai";



const Overlay = styled.div`
background-color:rgba(3, 11, 46, 0.5);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 560px;
    background: #03122F;
    padding: 0;
    border: 3px solid #6BD1FF;
    width: 100%;
    @media (min-width: 768px) {
    
    width: 800px;
    display: flex;
    flex-direction: column;
    padding: 20px 56px;

    }
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 20px;
    flex-direction: column;
    padding: 20px;
    
    form {
        button {
            position: relative;
            top: 20px;
            left: 4px;
            @media (min-width: 768px) {
                left: 69px;

    }
        }
    }

    h3 {
        color: white;
    }

    h1 {
        color: #2271D1;
        font-weight: bold;
        font-size: 25px;
        @media (min-width: 768px) {
            font-size: 3.2em;
        }
    }

    ul{
        padding-left: 0;
    }

    input {
        margin-top: 20px;
        border: 2px solid #2271D1;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
        background-color: #03122F;
        color: lightgray;
    }

    textarea{
        margin-top: 20px;
        border: 2px solid #2271D1;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
        background-color: #03122F;
        color: lightgray;
        resize: none;
    }
    
`

const BotonUno = styled.button`
padding: 10px 30px;
background-color: black;
color: #2271D1;
border: 2px solid #2271D1;
text-transform: uppercase;
font-weight: bold;
-webkit-box-shadow:inset 0px 1px 7px 2px #2271D1;;
-moz-box-shadow:inset 0px 1px 7px 2px #2271D1;;
box-shadow:inset 0px 1px 7px 2px #2271D1;;

`
const BotonDos = styled.button`
padding: 10px 30px;
background-color: black;
color: #fff;
border: 2px solid #fff;
text-transform: uppercase;
font-weight: bold;

`

const FormEstilizado = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 3px;
    color: white;
li {
    display: flex;
    flex-direction: column;
}

`

const BotonForm = styled.div`
display: flex;
justify-content: space-around;

`

const ContainerClose = styled.div`
width: 100%;
display: flex;
justify-content: end;

`

const Modal = ({ isOpen, closeModal }) => {

    if (!isOpen) return null;



    return <>
        <Overlay />
        <DialogEstilizado>
            <ContainerClose>
                <AiOutlineClose size={"30"} color="#fff" onClick={closeModal} />
            </ContainerClose>

            <FormEstilizado>
                <div>
                    <h1>EDITAR CARD:</h1>
                    <ul>
                        <li>
                            <label>Titulo:</label>
                            <input type="text" id="name" name="user_name" />
                        </li>
                        <li>
                            <label>Categoría:</label>
                            <input type="text" id="name" name="user_name" />
                        </li>
                        <li>
                            <label>Imagen:</label>
                            <input type="text" id="imagen" name="user_imagen" />
                        </li>
                        <li>
                            <label>Video:</label>
                            <input type="text" id="video" name="user_video" />
                        </li>
                        <li>
                            <label>Descripción:</label>
                            <textarea id="msg" name="user_message"></textarea>
                        </li>

                    </ul>
                </div>
                

            </FormEstilizado>
            <BotonForm>
                    <BotonUno>Guardar</BotonUno>
                    <BotonDos>Limpiar</BotonDos>
                </BotonForm>

        </DialogEstilizado>
    </>
}

export default Modal