ExpressPi
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Responses:
>success
>error
-msg
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*Register - POST /api/register
<string>name
<string>email
<string>password
<string>address
-------------------------------------------------------------------------
*Login - POST /api/login
<string>email
<string>password

(Note: After Login, get the token)
Api's requirements after login:

~Header
>Accept: application/json
>Authorization: Bearer + ' ' + $token
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*Product - GET /api/products
~Headers
*Product Price - GET /api/productprice
~Headers
*Product Inventory (includes Product available) - GET /api/productinv
~Headers
-------------------------------------------------------------------------
*Product - POST /api/products
(save product)
<string>name
<string>description
<integer>category
<string(file)>image
<boolean>active

(update product)
>add additional parameter: product 'id'
-------------------------------------------------------------------------
*Product Price - POST /api/productprice
(save product price)
<integer>product
<decimal>price
<string>discount
<decimal>fee

(update product price)
>add additional parameter: product price 'id'
-------------------------------------------------------------------------
*Product Inventory - POST /api/productinv
(save product inv)
<integer>product
<integer>quantity

(update product inv)
>add additional parameter: product inv 'id'
-------------------------------------------------------------------------


