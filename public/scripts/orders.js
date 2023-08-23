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

  loadOrders();
});



const loadOrders = function() {
  // TODO: Ajax get data
  $.get("/api/orders")
    .then(data => {
      renderOrders(data.orders);
      console.log(data);
    });
};
const renderOrders = function(items) {
  const container = $("#order-container");
  for (const item of items) {
    const element = createOrderElement(item);
    container.append(element);
  }
};
const createOrderElement = function(order) {
  console.log(order);
  const element = $(`
 <li class="order" id=${order.id}>
 <span class="phone">${order.phone_number}</span> - <span class = "status">${order.status}</span>
</li> 
  `);
  element.data("order", order);
  return element;
};