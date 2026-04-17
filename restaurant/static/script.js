let cart = [];
let total = 0;

function addItem(name, price) {
  cart.push({name, price});
  total += price;
  alert(name + " added to cart!");
}

function showOrder() {
  document.getElementById("orderPanel").style.display = "block";

  let cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
    let div = document.createElement("div");

    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.style.margin = "10px 0";

    div.innerHTML = `
      <span>${item.name} - ₹${item.price}</span>
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;

    cartDiv.appendChild(div);
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}
function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  showOrder();
}
function placeOrder() {
  const tableNumber = document.getElementById("tableNumber").value;

  fetch("http://127.0.0.1:8000/api/resto/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      table_number: tableNumber,
      total: total,
      items: cart
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Order placed successfully!");
    cart = [];
    total = 0;
    document.getElementById("cartItems").innerHTML = "";
    document.getElementById("total").innerText = "Total: ₹0";
  });
}

/* ITEMS DATA */
const items = [
  {name:"Paneer Tikka", price:200, img:"https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg", category:"veg-starters"},
  {name:"Veg Spring Roll", price:150, img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2013/12/spring-rolls.jpg", category:"veg-starters"},
  {name:"French Fries", price:150, img:"https://www.allrecipes.com/thmb/8_B6OD1w6h1V0zPi8KAGzD41Kzs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50223-homemade-crispy-seasoned-french-fries-VAT-Beauty-4x3-789ecb2eaed34d6e879b9a93dd56a50a.jpg", category:"veg-starters"},
  {name:"Gobi Manchurian", price:200, img:"https://www.indianveggiedelight.com/wp-content/uploads/2017/06/gobi-manchurian-featured.jpg", category:"veg-starters"},
  {name:"Crispy Corn", price:170, img:"https://www.foodie-trail.com/wp-content/uploads/2021/11/PHOTO-2021-11-02-22-30-50_1.jpg", category:"veg-starters"},
  {name:"Chicken Tikka", price:260, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--a-wg8SSwtuACNGsDlvzIdb5yf4awHvkHw&s", category:"nonveg-starters"},
  {name:"Chicken Lollipop", price:240, img:"https://static.toiimg.com/thumb/53222175.cms?imgsize=288245&width=800&height=800", category:"nonveg-starters"},
  {name:"Fish Fry", price:270, img:"https://static.toiimg.com/thumb/60973839.cms?imgsize=381178&width=800&height=800", category:"nonveg-starters"},
  {name:"Prawn Tempura", price:320, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyR7E-Ib85vk3mnrrbcINfvy3ZkWZKe1QYg&s", category:"nonveg-starters"},
  {name:"Mutton Seekh Kebab", price:300, img:"https://static.toiimg.com/photo/58360750.cms", category:"nonveg-starters"},
  {name:"Paneer Butter Masala", price:250, img:"https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg", category:"veg-main"},
  {name:"Veg Biryani", price:220, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8r4C0t2vRI66lejbMwyAwIlgvM18eCqKdAg&s ", category:"veg-main"},
  {name:"Dal Thadka", price:180, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12Pw_3Z542qXQNCDMjcuxXWvT5ik7Aklb0Q&s", category:"veg-main"},
  {name:"Mixed Vegetable Curry", price:200, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYoHNzlYtz0OtwFSqfJnpiFMKEsVtsw20qw&s", category:"veg-main"},
  {name:"Palak Panner", price:230, img:"https://www.whiskaffair.com/wp-content/uploads/2014/07/Palak-Paneer-2-3.jpg ", category:"veg-main"},
  {name:"Chicken Biryani", price:280, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIycguxFgTpIN3L00tYQhJ2WkypXj5w_QkQ&s", category:"nonveg-main"},  
  {name:"Butter Chicken", price:300, img:"https://sugarspunrun.com/wp-content/uploads/2025/04/Butter-chicken-1-of-1.jpg", category:"nonveg-main"},
  {name:"Mutton Rogan Josh", price:350, img:"https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-13-2-500x500.jpg", category:"nonveg-main"},
  {name:"Fish Curry", price:280, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmOKogYC-nhKy3wcnspsgz1feQn3WZ8IZ1g&s", category:"nonveg-main"},
  {name:"Egg curry", price:200, img:"https://www.whiskaffair.com/wp-content/uploads/2020/04/Kerala-Style-Egg-Curry-2-3.jpg", category:"nonveg-main"},
  {name:"Gulab Jamun", price:120, img:"https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800", category:"desserts"},
  {name:"Rasmalai", price:140, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ8OhwvqwQOe0QBoi9HIsd5CIazrWPSn7mA&s", category:"desserts"},
  {name:"Chocolate Brownie", price:170, img:"https://www.recipetineats.com/tachyon/2020/03/Brownies_0-SQ.jpg?resize=500%2C500", category:"desserts"},
  {name:"Ice Cream Sundae", price:150, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaXfRaJpgj4tiWx5dYOBNevQS_oQcAI0XoQ&s", category:"desserts"},
  {name:"Kheer", price:130, img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/kheer-recipe.jpg", category:"desserts"},
];
function loadItems() {
  items.forEach(item => {
    let container = document.getElementById(item.category);

    let div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${item.img}">
      <h4>${item.name}</h4>
      <p>₹${item.price}</p>
      <button onclick="addItem('${item.name}', ${item.price})">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}


loadItems();
