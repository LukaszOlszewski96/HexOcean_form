import React from 'react'
import {GiChiliPepper} from "react-icons/gi"
import "./Soup.css"

function Soup() {

    const[showScale, setScale]= React.useState(1);
    


    const onClickScale1=()=>{
        setScale(1)
        }
    const onClickScale2=()=>{
        setScale(2)
        }
    const onClickScale3=()=>{
        setScale(3)
        }
    const onClickScale4=()=>{
        setScale(4)
        }
    const onClickScale5=()=>{
        setScale(5)
        }
    const onClickScale6=()=>{
        setScale(6)
        }
    const onClickScale7=()=>{
        setScale(7)
        }
    const onClickScale8=()=>{
        setScale(8)
        }
    const onClickScale9=()=>{
        setScale(9)
        }
    const onClickScale10=()=>{
        setScale(10)
        }
    

    return (
        <div className="food-image">
            <img className="soup" src="\image\soup.png"/>
            <span className="span"></span>
            <div className="form-bottom">
                    <p className="text4">Spices scale: {showScale}</p>
                    <a className="spices 1" onClick={onClickScale1}><GiChiliPepper/></a>
                    <a className="spices 2" onClick={onClickScale2}><GiChiliPepper/></a>
                    <a className="spices 3" onClick={onClickScale3}><GiChiliPepper/></a>
                    <a className="spices 4" onClick={onClickScale4}><GiChiliPepper/></a>
                    <a className="spices 5" onClick={onClickScale5}><GiChiliPepper/></a>
                    <a className="spices 6" onClick={onClickScale6}><GiChiliPepper/></a>
                    <a className="spices 7" onClick={onClickScale7}><GiChiliPepper/></a>
                    <a className="spices 8" onClick={onClickScale8}><GiChiliPepper/></a>
                    <a className="spices 9" onClick={onClickScale9}><GiChiliPepper/></a>
                    <a className="spices 10" onClick={onClickScale10}><GiChiliPepper/></a>
                </div>
        </div>
    )
    }

export default Soup;