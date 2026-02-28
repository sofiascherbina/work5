import styled from "styled-components";
import { FaClock, FaStar, FaFire} from "react-icons/fa";
import RecipeInfo from "./RecipeInfo";

const List = styled.ul `
  display: flex;
  flex-wrap: wrap;
  gap: 200px;
  width: 1000px;
  margin: 50px 250px;
  padding : 0; `

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