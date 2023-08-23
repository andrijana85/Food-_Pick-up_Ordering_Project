// const loadMenu = () => {
//   $.ajax({
//     method: 'GET',
//     url: 'http://localhost:8080/menu',
//     dataType: 'json',
//     success: (items) => {
//       renderMenu(items);
//     },
//     error: (error) => {
//       console.log("Something went wrong", error);
//     }
//   });
// };
$(() => {
  alert("Ready");
  
  // $itemInput.on("click", addItem);
  // $("#items-container").on("click",".foodItem", addToCart);
  // $placeOrder.on("click", placeOrder);
  loadOrders();
});



const loadOrders = function() {
  // TODO: Ajax get data
  $.get("/api/orders")
    .then(data => {
      renderOrders(data.items);
      console.log(data.items);
    });
};
const renderOrders = function(items) {
  const container = $("#order-container");
  for (const item of items) {
    const element = createOrderElement(item);
    container.append(element);
  }
};
const createOrderElement = function(item) {
  console.log(item);
  const element = $(`
 <li class="order" id=${item.id}>${item.order_id} $${item.food_item_id} </li> 
  `);
  element.data("item", item);
  return element;
};