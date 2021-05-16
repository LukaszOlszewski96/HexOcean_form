import React from 'react';
import "./Form.css";

function Form() {
    return (
        <form className="conteiner-form">
            <div className="food-image">
                <img src="\img\pizza.png"/>
            </div>
            <p className="text1">Menu<span></span></p>
            <p className="text2">Delicious<br/> Food is Waiting<br/> For you</p>
            <div className="dishes-box">
                <a href="#">Pizza</a>
                <a href="#">Soup</a>
                <a href="#">Sandwich</a>
            </div>
            
            
        </form>
    )
}

export default Form;

