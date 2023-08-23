// const { format$ } = require("morgan");
const $itemInput = $("#item-input");
const $placeOrder = $("#place-order");
let cart = {};

$(() => {
  // alert("Ready");
  $("#cart-container").on("click",".remove-item", removeItem);
  $itemInput.on("click", addItem);
  $("#items-container").on("click",".foodItem", addToCart);
  $placeOrder.on("click", placeOrder);
  loadItems();
});

const addItem = function() {
  // const name = $itemInput.val();
  // const quantity = $("#quantity-input").val();
  // const item = { id:9, name , quantity, price: 900 };
  // const container = $("#items-container");
  // const element = createItemElement(item);
  // container.append(element);
  const element = $(this);
  const item = element.data("item");
  const count = (cart.item.id && cart.item.id.count || 0) + 1;
  cart.orders.item.id += { item, count };
  renderCart();
};

const removeItem = function() {
  console.log("remove");
  const element = $(this);
  console.log(element);
  const itemId = element[0].attributes.id.nodeType;
  const cartId = element[0].attributes.id.value;
  console.log(cart, itemId, cartId);
  const count = (cart[cartId].count || 0) - 1;
  // cart.orders[item.id] = { item, count };
  // !count && delete cart.orders[item.id];
  console.log(count);
  if (count <= 0) {
    delete cart[cartId]; // Remove the item from the cart completely
  } else {
    cart[cartId].count = count; // Update the item count
  }
  renderCart();
};

const loadItems = function() {
  // TODO: Ajax get data
  $.get("/api/menu")
    .then(data => {
      renderItems(data.items);
    });
};

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
  <img src=${item.image_url} width = "80px" height = "80px"> 
  <li class="foodItem" id=${item.id}>${item.name} $${item.price} </li> 
  `);
  element.data("item", item);
  return element;
};


const addToCart = function() {
  const element = $(this);
  const item = element.data("item");
  const cartItem = { item, count: 1};
  if (cart[item.id]) {
    cartItem.count = cart[item.id].count + 1;
  }
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
  const element = $(`<article class="cart-item">
  <li class="foodItem"> ${cartItem.item.name} ${cartItem.count} @ $${cartItem.item.price} $${totalPrice}</li> 
  <button class="remove-item" id=${cartItem.item.id}>Remove</button>
  </article>`);
  element.data("item", cartItem);
  return element;
};

const placeOrder = function() {
  //get  the phone number by the user
  const phoneNumber = $("#phone-input").val();
  
  //get the order data from the cart
  const orderData = Object.values(cart);
  
  //send the order data and phone number to the server
  $.ajax({
    method: "POST",
    url: "http://localhost:8080/api/orders",
    data: { order: orderData ,
      phoneNumber: phoneNumber
    },
    success: function(response) {
      // Display a success message to the user
      // $("#order-summary").html("Order placed successfully!");
      alert("Order placed successfully!");
      cart = {};
      renderCart();
    },
    error: function(error) {
      console.log("Error placing order:", error);
      $("#order-summary").html("Error placing order. Please try again.");
    }
  });
};