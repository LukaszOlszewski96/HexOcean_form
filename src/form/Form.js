import React from 'react';
import "./Form.css";
import Pizza from "./type/Pizza";
import Soup from "./type/Soup";
import Sandwich from "./type/Sandwich";
import Dishes from './type/Dishes';

function Form() {

    const [dish, setDish] = React.useState('Dishes');

    const handleChange = (event) =>{
        setDish(event.target.value);
    }


    return (
        <form className="conteiner-form">
            {dish === "Pizza" && <Pizza/>}
            {dish === "Soup" && <Soup/>}
            {dish === "Sandwich" && <Sandwich/>}
            {dish === "Dishes" && <Dishes/>}
            
            <p className="text1">Menu<span></span></p>
            <p className="text2">Delicious<br/> Food is Waiting<br/> For you</p>
            <div class="input-field">
                <input type="text" id="name" required />
                <label for="name">Dish name:</label>
            </div>
            <p className="text3 type">Type:</p>
            <div className="dishes-box">
                <select value={dish} onChange={handleChange} name="dishes">
                    <option value="Pizza">Pizza</option>
                    <option value="Soup">Soup</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Dishes">Dishes</option>
                </select>
            </div>
            <p className="text3 time">Preparation time:</p>
            <div className="time-field">
                <input type="time"  step="5" min="01:00:00" max="24:00:00" />
            </div>
            
            
        </form>
    )
}

export default Form;