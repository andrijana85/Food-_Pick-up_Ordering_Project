const cart = [];

$(() => {
  // alert("Ready");
  $("#testbutton").on("click", addItem);
  $("#items-container").on("click",".foodItem", addToCart);
  loadItems();
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