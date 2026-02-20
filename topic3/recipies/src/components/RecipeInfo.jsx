import PropTypes from "prop-types";
export default function  RecipeInfo({name,time,servings, calories, difficulty,image}){
    return (
    <>
    <li className="card">
        <h3>Name : {name}</h3>
        <p>Time : {time}</p>
        <p>Servings : {servings}</p>
        <p>Calories : {calories}</p>
        <p>Difficulty : {difficulty}</p>
        <img src={image} alt={name}  width="200px"/>
    </li>
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