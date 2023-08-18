const testdata = [
  {id:1, name:"hotdog", price: 999 },
  {id:2, name:"pizza", price: 999 },
  {id:3, name:"coffe", price: 999 },
  {id:4, name:"chili", price: 999 },
  {id:5, name:"hambuger", price: 999 },
];

const cart = [];
// Client facing scripts here
$(() => {
  // alert("Ready");
  $("#testbutton").on("click", addItem);
  $("#items-container").on("click",".foodItem", addToCart);
  loadItems();
});

const addItem = function() {
  const name = $("#item-input").val();
  const item = { id:9, name , price: 900};
  const container = $("#items-container");
  const element = createItemElement(item);
  container.append(element);
};
const loadItems = function() {
  // TODO: Ajax get data
  $.get("/api/items")
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
