import styled from "styled-components"
import PropTypes from "prop-types";


const Btn = styled.button`
background-color :#BB595F; 
border: none;
border-radius:25px; 
margin:15px 120px; 
width:150px;
color:white;
&:hover{
background-color: #AF3C3F}`;


const Element = styled.li`
text-align:center; 
border : none; 
border-radius: 25px;
padding:15px;
width:350px;
 & img{
 border-radius: 15px;
}`;

 const Info = styled.div`
    display:flex;
    gap:10px;
    width:320px;
    padding: 0 20px;
    height:50px;
    margin: 10px auto;
    text-align:center;
    background-color:white;
    border-radius:25px;
    color:black;`;

const Difficulty = styled.div`
    text-align:left;
    background-color:white;
    width:250px;
    margin:10px auto;
    padding: 10px 10px;
    border-radius:25px;
    h4{
    margin-top:0;}
    & ul{
        display:flex;
        gap:20px;
        padding:0 20px;
        list-style-type:none;
        & li{
        width:50px;
        text-align:center;} 
    }
    `;

const Selected = styled.p`
    background-color:#BB595F;
    color:white;
    text-align:center;
    border-radius:25px;
`;



export default function  RecipeInfo({name,time,servings, calories, difficulty,image,FaClock,FaStar,FaFire}){
    return (
    <>
    <Element>
        <img src={image} alt={name}  width="300px"/>
        <h3>{name}</h3>
        <Info>
            <p><FaClock/> Time : {time}</p>
            <p><FaStar/> Servings : {servings}</p>
            <p><FaFire/> Calories : {calories}</p>
        </Info>
       <Difficulty>
        <h4>Difficulty</h4>
        <ul>
            <li>{
                difficulty===0
                ? <Selected>Easy</Selected>
                : <p>Easy</p>}
            </li>
            <li>{
                difficulty===1
                ? <Selected style={{width:"70px"}}> Medium </Selected>
                : <p>Medium</p>}
            </li>
            <li>{
                difficulty===2
                ? <Selected>Hard</Selected>
                : <p>Hard</p>}
            </li>
        </ul>
       </Difficulty>
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