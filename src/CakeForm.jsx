import { useState } from "react";

const CakeForm = ({cakes, setCakes}) => {

    const [cakeName, setCakeName] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [rating, setRating] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        // perform validation (TODO)
        const newCake = {cakeName, ingredients, rating}
        setCakes([newCake, ...cakes])
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Cake Name:</label>
            <input type="text" id="cake-name" name="cakeName" placeholder="Enter cake name..." value={cakeName} onChange={(e) => setCakeName(e.target.value)}/>
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea cols="30" rows="1" id="ingredients" name="ingredients" placeholder="Enter ingredients..." value={ingredients} onChange={(e) => setIngredients(e.target.value.split(","))}></textarea>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" min={1} max={5} name="rating" placeholder="Enter rating..." value={rating} onChange={(e) => setRating(Number(e.target.value))}/>
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;