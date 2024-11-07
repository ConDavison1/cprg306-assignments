"use client"
import { useEffect } from "react"
import { useState } from "react"

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || [];

        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    };

    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas)
    }
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient])

    return (
        <div className=" p-4  font-mono ">
            <h2 className="text-xl font-bold mb-2 text-white">"{ingredient}" Meal Ideas:</h2>
            <ul className="space-y-2">
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal} className="flex items-center bg-zinc-700 p-2 rounded hover:bg-zinc-600 transition duration-200 border-2 border-black">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded" />
                            <span className="ml-2 text-white">{meal.strMeal}</span>
                        </li>
                    ))
                ) : (
                    <li className="text-white m">No meals found</li>
                )}
            </ul>
        </div>
    );
}