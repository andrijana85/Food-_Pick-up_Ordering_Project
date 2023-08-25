const testdata = [
  {id:1, name:"hotdog", price: 999 },
  {id:2, name:"pizza", price: 999 },
  {id:3, name:"coffe", price: 999 },
  {id:4, name:"chili", price: 999 },
  {id:5, name:"hambuger", price: 999 },
];

const cart = [];
// Client facing scripts here
// $(() => {
//   // alert("Ready");
//   $("#testbutton").on("click", addItem);
//   $("#items-container").on("click",".foodItem", addToCart);
//   loadItems();
// });
$(document).ready(function() {
  alert("Ready");
  $('#orderNow').click(function() {
    window.location.href = '/menu'; // Redirect to the /menu page
  });
});
const addItem = function() {
  const name = $("#item-input").val();
  const quantity = $("#quantity-input").val();
  const item = { id:9, name , quantity, price: 900 };
  const container = $("#items-container");
  const element = createItemElement(item);
  container.append(element);
};
const loadItems = function() {
  // TODO: Ajax get data
  $.get("/api/menu-items")
    .then(data => {
      renderItems(data);
    });
};

const renderItems = function(items) {
  const container = $("#items-container");

  for (const item of items) {
    const element = createItemElement(item);
    container.append(element);
  }
};

const createItemElement = function(item) {
  return `
  <li class="foodItem" id=${item.id}>${item.name} ${item.price}</li> 
  `;
  
};
const addToCart = function() {
  const item = $(this);
  console.log(item);
  console.log(item.text());
  $("#cart").append(item);
};
