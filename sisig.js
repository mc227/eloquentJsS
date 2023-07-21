const sisig = function(factor){
    const ingredient = function(amount,unit,name){
        let ingredientAmount = factor * amount
        if (ingredientAmount > 1) {
            unit += "s"
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    }

   ingredient(1,"pound","pork belly")
   ingredient(3,"pc","chicken liver")
   ingredient(1,"pc","big red onion")
   ingredient(1,"pc","chili pepper")
   ingredient(1/2,"tablespoon","soy sauce")
   ingredient(1/8,"tablespoon","ground black pepper")
}

sisig(1)