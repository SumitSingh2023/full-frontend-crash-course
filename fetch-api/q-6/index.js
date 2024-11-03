function getCategoryData() {
    let data = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')

    data.then((res) => {
        return res.json()
    }).then((data) => {
        data.meals?.forEach((meal) => {
            console.log(meal.strMeal)
        })
    }).catch((error) => {
        console.log(`Error found :- ${error}`)

    })
}

async function getIngredientData() {
    // let data = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')

    // data.then((res)=>{
    //     return res.json()
    // }).then((data)=>{
    //     data.meals?.forEach((meal)=>{
    //         console.log(meal)
    //     })

    // })
    try {
        let res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
        let data = await res.json()
        data.meals?.forEach((meal)=>{
            console.log(meal.strMeal)
        })
    } catch (error) {
        console.log('something went wrong')

    }

}