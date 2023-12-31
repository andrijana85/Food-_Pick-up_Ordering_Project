const $itemInput = $("#item-input");
const $placeOrder = $("#place-order");
const $cartContainer = $("#cart-container");
const $itemContainer = $("#items-container");
const $confirmOrder = $("#confirm-order-button");
const $cancelOrder = $("#cancel-order-button");


let cart = {};

$(() => {
  loadItems();
  //remove the item from the cart
  $cartContainer.on("click",".remove-item", removeItem);
  $itemContainer.on("click",".add-item", addToCart);
  
  //add the item to the cart
  $itemContainer.on("click",".foodItem", addToCart);


  $itemInput.on("click", addItem);


  //confirm order button click event
  $confirmOrder.on("click", placeOrder);
  
});


const addItem = function() {
  const element = $(this);
  const item = element.data("item");
  const count = (cart.item.id && cart.item.id.count || 0) + 1;
  cart.orders.item.id += { item, count };
  renderCart();
};

//remove the item from the cart
const removeItem = function() {
  // console.log("remove");
  const element = $(this);
  // console.log(element);
  const itemId = element[0].attributes.id.nodeType;
  const cartId = element[0].attributes.id.value;
  // console.log(cart, itemId, cartId);
  const count = (cart[cartId].count || 0) - 1;
  // console.log(count);

  if (count <= 0) {
    delete cart[cartId]; // Remove the item from the cart completely
  } else {
    cart[cartId].count = count; // Update the item count
  }
  renderCart();
};

//get data from api/menu
const loadItems = function() {
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
    // console.log(item);
    total += item.count * item.item.price;
    const element = createCartElement(item);
    container.append(element);
  }
  const totalElement = createTotalElement(total);
  container.append(totalElement);
  renderTotal(total);
};

const createTotalElement = function(total) {
  return $(`<div class="cart-item-total"> Total: $${(total)}</div>`);
};

const renderTotal = function(total) {
  $("#order-total").text((total));
};

const createItemElement = function(item) {
  const element = $(`
  <img src=${item.image_url} width = "150px" height = "150px"> 
  <li class="foodItem" id=${item.id}>${item.name}
  <br> - ${item.description} - $${item.price} </li> 
  <button class="add-item" id=${item.id}>Add to cart</button>
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
  // console.log(item);
  // console.log(item.name);
  renderCart();
};

const createCartElement = function(cartItem) {
  const totalPrice = cartItem.count * cartItem.item.price;
  // console.log(cartItem);
  const element = $(`<article class="cart-item">
  <li class="foodItem"> ${cartItem.item.name} <br>
  ${cartItem.count} * $${cartItem.item.price}</li> 
  <button class="remove-item" id=${cartItem.item.id}>Remove</button>
  <hr class="separator">
  </article>`);
  element.data("item", cartItem);
  return element;
};

const placeOrder = function() {
  //get  the phone number by the user
  // console.log(cart);
  
  const phoneNumber = $("#phone-number").val();
  const items = Object.values(cart);
  // console.log(items);
  const data = { phoneNumber, items };
  console.log(JSON.stringify(data));
  
  //get the order data from the cart
  // console.log(cart);
  cart.phoneNumber = phoneNumber;
  //send the order data and phone number to the server
  $.ajax({
    method: "POST",
    url: "/api/orders",
    data,
    success: function(response) {
      // console.log(response);
      cart = {};
      renderCart();
      $('#exampleModal').modal('hide');
      $("#order-complete").modal("show");
    },
    error: function(error) {
      console.log("Error placing order:", error);
      $("#order-summary").html("Error placing order. Please try again.");
    }
  });
};