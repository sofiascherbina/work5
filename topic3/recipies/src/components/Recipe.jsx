import RecipeInfo from "./RecipeInfo";
export default function Recipe({recipe}){
    return (
         <ul>
            {recipe.map(rec =>(<RecipeInfo
                name ={rec.name}
                time = {rec.time}
                servings={rec.servings}
                calories={rec.calories}
                difficulty={rec.difficulty}
                image={rec.image}
            />))}
    </ul>
    )
   
}