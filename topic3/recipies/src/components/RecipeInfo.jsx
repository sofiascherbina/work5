import styled from "styled-components"
import PropTypes from "prop-types";


const Btn = styled.button`
background-color :#a3d4ff; 
border: 1px solid white; 
margin:15px 120px; 
color:white;
&:hover{
background-color: #888}`;


const Element = styled.li` 
border : 1px solid white; 
border-radius: 25px;
padding:15px;
width:300px;
 & p{
 color:white
 }
 & img{
 border-radius: 15px;
 margin: 0 50px;}`

export default function  RecipeInfo({name,time,servings, calories, difficulty,image,FaClock,FaStar,FaFire}){
    return (
    <>
    <Element className="card">
        <h3 style={{color:"white"}}> Name : {name}</h3>
        <p><FaClock/> Time : {time}</p>
        <p><FaStar/> Servings : {servings}</p>
        <p><FaFire/> Calories : {calories}</p>
        <p>Difficulty : {difficulty}</p>
        <img src={image} alt={name}  width="200px"/>
        <Btn>Order</Btn> 
    </Element>
    </>
)
}
RecipeInfo.propTypes = {
    name : PropTypes.string,
    time : PropTypes.number,
    calories : PropTypes.number,
    difficulty : PropTypes.number,
    servings : PropTypes.number,
}