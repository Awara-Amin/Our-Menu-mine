// alert("are you Ok");


const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },

  {
    id: 10,
    title: "Rice and checken",
    category: "dinner",
    price: 20.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

var mainSection = document.querySelector(".mianMinue");

// loadding web
window.addEventListener("DOMContentLoaded", function(){
  // console.log("you good mate");
  displayMenuItems(menu);
});

function displayMenuItems(menuItems){
// var displayMenu = menu.map(function(item){
var displayMenu = menuItems.map(function(item){
   // console.log(item);
   // return `<h1>hi mate</h1>`
   // return `<h1>${item.title}</h1>`
   return `<div class="first">
     <div class="image">
       <img src=${item.img} alt="${item.title}">
     </div>
     <div class="minor">
     <span class="catagore">${item.category}</span>
     <span class="price">${item.price}</span>
     <hr />
     <p class="comment">${item.desc}</p>
     </div>
   </div>`
});
// console.log(displayMenu);
var displayMenuJoin = displayMenu.join("");
// console.log(displayMenuJoin);
// New to me wow
// mainSection.innerHTML= "awara" ;
mainSection.innerHTML= displayMenuJoin ;
}

var filteredButton = document.querySelectorAll(".filter-btn");
// console.log(filteredButton)
filteredButton.forEach(function(btn){

  btn.addEventListener("click", function(e){
    // alert("I am clicked");
    const categoryOfClickedButton = e.currentTarget.dataset.id;
    const menuForTheClickedCatagory = menu.filter(function(menuItem){
      // console.log(menuItem.category);
      if(menuItem.category === categoryOfClickedButton){
        return menuItem;
      }
    });
    console.log(menuForTheClickedCatagory );

    if(categoryOfClickedButton === "all"){
      displayMenuItems(menu);
    } else{
      displayMenuItems(menuForTheClickedCatagory);
    }
  });
});

//
// menu.forEach(function(item) {
// // console.log("kwe");
// var test2 =  item.category;
// console.log("kaka this is" + test2);
// if(test2 === clickedButton){
//   console.log ("how can you say that");
// }
