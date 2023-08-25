
### PAGE ROUTES (render html )

GET /
1. check for user in the session
2. if no user it renders the menu page(landing page)
3. if there is the user redirects to the order page /orders (GET )

GET  /menu/owner_id

1. check for user in the session
2. if there is the user redirects to the order page /orders (GET )
3. if there is no user renders te /menu for the owner


GET /orders
1. check for user in the session
2. if no user it redirects to the menu page(landing page)
3. renders the orders page (/orders )

### API routes (returns json res.json(), and send object or array)

GET /api/items/:ownerId  this is called by the loadITems in the menu page
POST /api/orders this is called by the creatOrder in the menu page

GET /api/orders this is called by the loadITems in the order page
POST /api/orders/:id set the status of the order  

