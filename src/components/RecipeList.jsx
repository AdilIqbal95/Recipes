const RecipeList = ({cakes}) => {

    const recipeListCards = cakes.map((cake, index) => {
        return(
            <div key={index}>
                <h3>{cake.cakeName}</h3>
                <ul>
                    {cake.ingredients.map((ingredient, index) => {
                        return(
                            <li key={index}>{ingredient}</li>
                        )
                    })}
                </ul>
                <p><b>Rating:</b> {cake.rating}</p>
            </div>
        )
    })
    // console.log(cakes);
    return (
        <>
            <section>
                {recipeListCards}
            </section>
            <section>
                <h4>Average cake rating: </h4>
                <p>{(cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length)}</p>
            </section>
        </>
    )

}

export default RecipeList;