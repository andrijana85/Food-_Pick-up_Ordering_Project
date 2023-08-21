const loadMenu = () => {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/menu',
    dataType: 'json',
    success: (items) => {
      renderMenu(items);
    },
    error: (error) => {
      console.log("Something went wrong", error);
    }
  });
};
const renderItems = function(items) {
  const container = $("#items-container");

  for (const item of items) {
    const element = createItemElement(item);
    container.append(element);
  }
};


loadMenu();