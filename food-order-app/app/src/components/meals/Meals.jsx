import useFetch from "../../hooks/useFetch.js";
import MealItem from "./MealItem.jsx"

const requestConfig = {}

export default function Meals() {

    const { data: meals, isLoading, error } = useFetch('http://localhost:3000/meals', requestConfig, [])

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