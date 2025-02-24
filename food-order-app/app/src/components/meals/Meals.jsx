import useFetch from "../../hooks/useFetch.js";
import Error from "../util/Error.jsx";
import MealItem from "./MealItem.jsx"

const requestConfig = {}

export default function Meals() {

    const { data: meals, isLoading, error } = useFetch('http://localhost:3000/meals', requestConfig, [])

    if (isLoading) {
    }

    if(error) {
        return <Error title="Failed to fetch" message={error}/>
    }

    return (
        <ul id="meals">
            {meals.map((meal) => (
                <MealItem
                    key={meal.id}
                    meal={meal}
                />
            ))}
        </ul>
    )
} 