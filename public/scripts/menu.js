const cart = {};

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
  $.get("/api/menu")
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
  const element = $(`
  <li class="foodItem" id=${item.id}>${item.name} ${item.price}</li> 
  `);
  
  element.data("item", item);

  return element;
};


const addToCart = function() {
  const element = $(this);
  const item = element.data("item");
  const cartItem = { item, count: 1};
  cart[item.id] = cartItem;
  // const cartElement = createCartElement(cartItem);
  console.log(item);
  console.log(item.text());
  // $("#cart-container").append(cartElement);
  renderCart();
};


const createCartElement = function(cartItem) {
  const totalPrice = cartItem.count * cartItem.item.price;
  const element = $(`
  <li class="foodItem">${cartItem.name} ${cartItem.count} @ ${cartItem.price} ${totalPrice}</li> 
  `);
  element.data("item", cartItem);
  return element;
};

