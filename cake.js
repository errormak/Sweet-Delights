const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const description = card.querySelector('.description');
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
  });
});
const cakesData = [
    {
        "id": 1,
        "name": "Raspberry and custard muffins",
        "image": "https://apipics.s3.amazonaws.com/cakes_api/1.jpg",
        "ingredients": [
            "250g self-raising flour",
            "1 tsp baking powder",
            "100g golden caster sugar",
            "2 eggs",
            "150ml sunflower oil",
            "150ml semi-skimmed milk",
            "1 tsp vanilla extract",
            "200g fresh or frozen raspberries",
            "6 tsp ready-made custard"
        ],
        "method": [
            "Heat oven to 200C/180C fan/gas 6 and line a 12-hole muffin tin with paper cases.",
            "Mix the flour, baking powder and sugar in a large bowl.",
            "In a separate bowl, whisk together the eggs, oil, milk and vanilla.",
            "Pour the wet ingredients into the dry and mix briefly until just combined.",
            "Add the raspberries and gently fold through the mixture.",
            "Divide the mixture between the cases, then top each with ½ tsp custard.",
            "Bake for 20-25 mins until risen and golden.",
            "Leave to cool in the tin for 10 mins, then transfer to a wire rack to cool completely."
        ],
        "video": "https://www.youtube.com/watch?v=abcd1234" 
    },
    {
        "id":2,
        "name": "Lemon and blackberry stripe cake",
        "image": "https://apipics.s3.amazonaws.com/cakes_api/2.jpg",
        "ingredients": [
          "1 cup blackberries",
          "2 cups flour",
          "1 cup sugar",
          "1/2 cup butter",
          "2 eggs",
          "1/2 cup milk",
          "1/4 cup lemon juice",
          "1 tbsp lemon zest",
          "2 tsp baking powder"
        ],
        "method": [
          "Preheat oven to 350°F (175°C).",
          "Cream butter and sugar until fluffy. Add eggs one at a time.",
          "Mix in lemon juice and zest.",
          "Add flour, baking powder, and milk alternately, mixing until combined.",
          "Fold in blackberries.",
          "Pour batter into a greased pan and bake for 30-35 minutes or until a toothpick comes out clean."
        ]
      },
      {
        "id":3,
        "name": "Paul Hollywood’s chocolate fudge cake",
        "image": "https://apipics.s3.amazonaws.com/cakes_api/3.jpg",
        "ingredients": [
          "2 cups flour",
          "1 cup sugar",
          "1 cup cocoa powder",
          "1/2 cup butter",
          "1/2 cup vegetable oil",
          "2 eggs",
          "1 cup buttermilk",
          "2 tsp baking soda",
          "1 tsp vanilla extract"
        ],
        "method": [
          "Preheat oven to 350°F (175°C).",
          "Cream butter, oil, and sugar until light and fluffy.",
          "Add eggs one at a time, beating well after each addition.",
          "Mix in vanilla extract.",
          "Sift together flour, cocoa powder, and baking soda. Add to the wet mixture alternately with buttermilk.",
          "Pour batter into prepared pans and bake for 25-30 minutes.",
          "Cool completely before frosting with chocolate fudge."
        ]
      },
      {  "id":3,
        "name": "Lemon and strawberry meringue cake",
        "image": "https://apipics.s3.amazonaws.com/cakes_api/4.jpg",
       
        "ingredients": [
          "2 cups flour",
          "1 cup sugar",
          "1/2 cup butter",
          "1/2 cup milk",
          "2 eggs",
          "1/4 cup lemon juice",
          "1 tbsp lemon zest",
          "1/2 cup strawberries, sliced",
          "2 tsp baking powder"
        ],
        "method": [
          "Preheat oven to 350°F (175°C).",
          "Cream butter and sugar until fluffy. Add eggs one at a time.",
          "Mix in lemon juice and zest.",
          "Add flour, baking powder, and milk alternately, mixing until combined.",
          "Fold in sliced strawberries.",
          "Pour batter into a greased pan and bake for 30-35 minutes.",
          "Top with meringue made from whipped egg whites and sugar, and bake until golden."
        ]
      },
      {  "id":4,
        "name": "Vegan chocolate cake",
        "image": "https://apipics.s3.amazonaws.com/cakes_api/5.jpg",
       
        "ingredients": [
          "2 cups flour",
          "1 cup sugar",
          "1/2 cup cocoa powder",
          "1 tsp baking soda",
          "1/2 cup vegetable oil",
          "1 cup almond milk",
          "1 tbsp vinegar",
          "1 tsp vanilla extract"
        ],
        "method": [
          "Preheat oven to 350°F (175°C).",
          "Mix flour, sugar, cocoa powder, and baking soda in a bowl.",
          "In another bowl, combine oil, almond milk, vinegar, and vanilla extract.",
          "Mix wet and dry ingredients until smooth.",
          "Pour batter into a greased pan and bake for 30-35 minutes.",
          "Cool completely before frosting with vegan chocolate ganache."
        ]
      },
      { "id":5,
        "name": "Spiced plum cake with swiss meringue frosting",
        "image": "https://apipics.s3.amazonaws.com/cakes_api/6.jpg",
     
        "ingredients": [
          "2 cups flour",
          "1 cup sugar",
          "1/2 cup butter",
          "1/2 cup milk",
          "2 eggs",
          "1/2 cup plums, sliced",
          "1 tsp cinnamon",
          "1 tsp nutmeg",
          "2 tsp baking powder"
        ],
        "method": [
          "Preheat oven to 350°F (175°C).",
          "Cream butter and sugar until light and fluffy.",
          "Add eggs one at a time, beating well.",
          "Mix in milk.",
          "Sift together flour, cinnamon, nutmeg, and baking powder, then add to wet ingredients.",
          "Fold in sliced plums.",
          "Pour into a greased pan and bake for 30-35 minutes.",
          "Cool completely before frosting with Swiss meringue."
        ]
      },
      {  "id":6,
        "name": "Lemon and courgette cake with white chocolate cream cheese frosting",
        "image": "https://apipics.s3.amazonaws.com/cakes_api/7.jpg",
        "ingredients": [
          "2 cups flour",
          "1 cup sugar",
          "1/2 cup butter",
          "2 eggs",
          "1/2 cup milk",
          "1/2 cup courgette, grated",
          "1/4 cup lemon juice",
          "1 tbsp lemon zest",
          "2 tsp baking powder"
        ],
        "method": [
          "Preheat oven to 350°F (175°C).",
          "Cream butter and sugar until fluffy. Add eggs one at a time.",
          "Mix in lemon juice and zest.",
          "Add flour, baking powder, and milk alternately, mixing until combined.",
          "Fold in grated courgette.",
          "Pour batter into a greased pan and bake for 30-35 minutes.",
          "Cool completely before frosting with white chocolate cream cheese frosting."
        ]
      },
      {  "id":7,
        "name": "Chocolate cake with caramel poached pears and chocolate buttercream",
        "image": "https://apipics.s3.amazonaws.com/cakes_api/8.jpg",
        "ingredients": [
          "2 cups flour",
          "1 cup sugar",
          "1 cup cocoa powder",
          "1/2 cup butter",
          "1/2 cup vegetable oil",
          "2 eggs",
          "1 cup buttermilk",
          "2 tsp baking soda",
          "1 tsp vanilla extract",
          "2 pears, poached in caramel"
        ],
        "method": [
          "Preheat oven to 350°F (175°C).",
          "Cream butter, oil, and sugar until light and fluffy.",
          "Add eggs one at a time, beating well after each addition.",
          "Mix in vanilla extract.",
          "Sift together flour, cocoa powder, and baking soda. Add to the wet mixture alternately with buttermilk.",
          "Pour batter into prepared pans and bake for 25-30 minutes.",
          "Cool completely before frosting with chocolate buttercream.",
          "Garnish with caramel poached pears."
        ]
      },
      {   "id":8,
        "name": "Rhubarb and custard layer cake",
        "image": "https://apipics.s3.amazonaws.com/cakes_api/9.jpg",
        "ingredients": [
          "2 cups flour",
          "1 cup sugar",
          "1/2 cup butter",
          "2 eggs",
          "1/2 cup milk",
          "1/2 cup rhubarb, chopped",
          "1/2 cup custard",
          "2 tsp baking powder"
        ],
        "method": [
          "Preheat oven to 350°F (175°C).",
          "Cream butter and sugar until fluffy. Add eggs one at a time.",
          "Mix in milk.",
          "Sift together flour and baking powder, then add to wet ingredients.",
          "Fold in chopped rhubarb.",
          "Pour batter into a greased pan and bake for 30-35 minutes.",
          "Cool completely before layering with custard."
        ]
      },
      {   "id":9,
        "name": "Amaretti and polenta cherry cake",
        "image": "https://apipics.s3.amazonaws.com/cakes_api/10.jpg",
        "ingredients": [
          "1 cup cherries, pitted",
          "1 cup polenta",
          "1/2 cup amaretti biscuits, crushed",
          "1/2 cup butter",
          "1 cup sugar",
          "2 eggs",
          "1/2 cup milk",
          "1 tsp vanilla extract",
          "2 tsp baking powder"
        ],
        "method": [
          "Preheat oven to 350°F (175°C).",
          "Cream butter and sugar until fluffy. Add eggs one at a time.",
          "Mix in vanilla extract.",
          "Sift together polenta, crushed amaretti biscuits, and baking powder. Add to wet ingredients alternately with milk.",
          "Fold in cherries.",
          "Pour batter into a greased pan and bake for 30-35 minutes.",
          "Cool before serving."
        ]
      }
  
    // Add more cake objects here
];


const cakeContainer = document.getElementById('cakeContainer');
const modal = document.getElementById('recipeModal');
const closeBtn = document.getElementsByClassName('close')[0];
const recipeName = document.getElementById('recipeName');
const recipeImage = document.getElementById('recipeImage');
const ingredientsList = document.getElementById('ingredientsList');
const methodList = document.getElementById('methodList');

function createCakeCard(cake) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${cake.image}" alt="${cake.name}">
        <div class="description">${cake.name}</div>
    `;
    card.addEventListener('click', () => showRecipe(cake));
    return card;
}

function showRecipe(cake) {
    recipeName.textContent = cake.name;
    recipeImage.src = cake.image;
    recipeImage.alt = cake.name;
    
    ingredientsList.innerHTML = '';
    cake.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    methodList.innerHTML = '';
    console.log(cake)
    cake.method.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        methodList.appendChild(li);
    });
    
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

cakesData.forEach(cake => {
    const card = createCakeCard(cake);
    card.addEventListener('click', () => showRecipe(cake));
    cakeContainer.appendChild(card);
});
document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
        const cake = cakesData[index];
        if (cake) {
            console.log(cake.name)
            showRecipe(cake);
            console.log("cake present")
        } else {
            console.error('No recipe data for this cake');
        }
    });
});