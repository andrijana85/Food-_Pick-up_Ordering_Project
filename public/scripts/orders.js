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



loadMenu();