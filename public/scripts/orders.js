$(() => {
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

//not finished yet
const createOrder = function() {
  // TODO: Ajax get data
  $.get("/api/orders/:id")
    .then(data => {
      renderOrders(data.orders);
      console.log(data);
    });
};

const renderOrders = function(orders) {
  const container = $("#order-container");
  for (const order of orders) {
    const element = createOrderElement(order);
    container.prepend(element);
  }
};