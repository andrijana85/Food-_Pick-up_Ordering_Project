
const menu = [
  {id: 1, name: "hotdog", price: 10},
  {id: 2, name: "hotdog2", price: 18},
  {id: 3, name: "hotdog6", price: 19}
];

const cartList = $("#cart");
const menuList = $("#menu");


const addToCart = function() {
  const element = $("<li>  </li>");
  cartList.append(element);
};


const renderItems = function(element) {
  const item = $(`<li id=${element.id}> ${element.name} -- ${element.price}</li>`);
  item.click(() => {
    addToCart(item);
  });
  menuList.append(item);
};
  
menu.forEach(renderItems);