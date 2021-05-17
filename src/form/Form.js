import React from 'react';
import "./Form.css";

function Form() {

    const [showType,setType] = React.useState("Pizza");

    const openPizza=()=>{
        console.log("Pizza");
        setType("Pizza");
    }
    const openSoup=()=>{
        console.log("Soup")
        setType("Soup");
    }
    const openSandwitch=()=>{
        console.log("Sandwitch");
        setType("Sandwitch");
    }

    return (
        <form className="conteiner-form">
            <div className="food-image">
                <img src="\image\pizza.png"/>
                <span></span>
                <p>Salami Pizza</p>
            </div>
            <p className="text1">Menu<span></span></p>
            <p className="text2">Delicious<br/> Food is Waiting<br/> For you</p>
            <div class="input-field">
                <input type="text" id="name" required />
                <label for="name">Dish name:</label>
            </div>
            <p className="text3 type">Type:</p>
            <div className="dishes-box">
                <a onClick={openPizza} href="#">Pizza</a>
                <a onClick={openSoup} href="#">Soup</a>
                <a onClick={openSandwitch} href="#">Sandwich</a>
            </div>
            <p className="text3 time">Preparation time:</p>
            <div className="time-field">
                <input type="time"  step="5" min="01:00:00" max="24:00:00" />
            </div>
            
            
        </form>
    )
}

export default Form;

