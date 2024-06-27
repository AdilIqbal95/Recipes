import { useState } from "react";
import "../components/RecipeList"
import RecipeList from "../components/RecipeList";
import CakeForm from "../CakeForm";

const RecipeListContainer = () => {

    const [cakes, setCakes] = useState([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ])

    // console.log(cakes);

    return (
        <>
            <RecipeList cakes={cakes}/>
            <CakeForm cakes={cakes} setCakes={setCakes}/>
        </>
    )

}

export default RecipeListContainer;