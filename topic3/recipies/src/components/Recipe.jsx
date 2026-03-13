import styled from "styled-components";
import { FaClock, FaStar, FaFire} from "react-icons/fa";
import RecipeInfo from "./RecipeInfo";

const List = styled.ul `
  display: flex;
  gap: 20px;
  width: 1600px;
  background-color: #fff9ae;
  margin: 0 0 0 40px;
  height:auto;
  padding : 15px 20px;
  list-style-type:none; `

export default function Recipe({recipe}){
    return (
         <List>
            {recipe.map(rec =>(<RecipeInfo
                name ={rec.name}
                time = {rec.time}
                servings={rec.servings}
                calories={rec.calories}
                difficulty={rec.difficulty}
                image={rec.image}
                FaClock={FaClock}
                FaStar={FaStar}
                FaFire={FaFire}
            />))}
    </List>
    )
   
}