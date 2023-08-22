// const { format$ } = require("morgan");
const $itemInput = $("#item-input");
const $placeOrder = $("#place-order");
let cart = {};

$(() => {
  alert("Ready");
  loadItems();
  $itemInput.on("click", addItem);
  $("#items-container").on("click",".foodItem", addToCart);
  $placeOrder.on("click", placeOrder);
  // loadItems();
});

const addItem = function() {
  const name = $itemInput.val();
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
      renderItems(data.items);
    });
};
// const loadItems = () => {
//   $.ajax({
//     method: 'GET',
//     url: 'http://localhost:8080/menu',
//     dataType: 'json',
//     success: (data) => {
//       renderItems(data.items);
//     },
//     error: (error) => {
//       console.log("Something went wrong", error);
//     }
//   });
// };

const renderItems = function(items) {
  const container = $("#items-container");
  for (const item of items) {
    const element = createItemElement(item);
    container.append(element);
  }
};

const renderCart = function() {
  let total = 0;
  const container = $("#cart-container").empty();
  for (const item of Object.values(cart)) {
    console.log(item);
    total += item.count * item.item.price;
    const element = createCartElement(item);
    container.append(element);
  }
  const totalElement = createTotalElement(total);
  container.append(totalElement);

  renderTotal(total);
};

const createTotalElement = function(total) {
  return $(`<div class="cart-item"> Total: ${(total)}</div>`);
};
const renderTotal = function(total) {
  $("#order-total").text((total));
};

const createItemElement = function(item) {
  const element = $(`
  <img src=${item.image_url} width= 100px> <li class="foodItem" id=${item.id}>${item.name} ${item.price} </li> 
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
  console.log(item.name);
  // $("#cart-container").append(cartElement);
  renderCart();
};


const createCartElement = function(cartItem) {
  const totalPrice = cartItem.count * cartItem.item.price;
  console.log(cartItem);
  const element = $(`
  <li class="foodItem"> ${JSON.stringify(cartItem.item.name)} ${cartItem.count} @ ${cartItem.item.price} ${totalPrice}</li> 
  `);
  element.data("item", cartItem);
  return element;
};
const placeOrder = function() {
  const orderData = Object.values(cart);
  $.ajax({
    method: "POST",
    url: "http://localhost:8080/api/orders",
    data: { order: orderData },
    success: function(response) {
      // Display a success message to the user
      $("#order-summary").html("Order placed successfully!");
      cart = {};
      renderCart();
    },
    error: function(error) {
      console.log("Error placing order:", error);
      $("#order-summary").html("Error placing order. Please try again.");
    }
  });
};