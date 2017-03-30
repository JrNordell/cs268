<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="OrderPage" content="Order Form">
    <script src="pizza.js"></script>
    <title>Pizza|Order</title>
    <link rel="stylesheet" type="text/css" href="pizza.css">
    <script src="http://use.edgefonts.net/cabin-sketch.js"></script>
    <script src="http://use.edgefonts.net/passion-one.js"></script>
</head>
    <body>
    <div id="container">
        <div id="orderContainer">
            <div id="menuBar">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="toppings.html">Toppings</a></li>
                    <li><a href="photos.html">Photos</a></li>
                    <li><a href="order.html">Order</a></li>
                </ul>
            </div>
            <div id="orderForm">
                <h1>
                    create your own 'za
                </h1>
                <form name="pizzaOrderForm" method="post" action="http://yoda.cs.uwec.edu/CS268/students/HARDTR/processForm.php" onsubmit="return validate();">
                    <table class="formTable">
                        <tr>
                            <td class="formLabel">Size</td>
                            <td><select name="pizzaSize">
                                <option value="">Choose a size</option>
                                <option value="s">Small</option>
                                <option value="m">Medium</option>
                                <option value="l">Large</option>
                                <option value="r">Ryan Sized</option>
                            </select></td></tr>
                        <tr><td class="formLabel">Toppings</td>
                            <td>
                                <input type="checkbox" name="pepperoni" value="pepp">Pepperoni
                                <br>
                                <input type="checkbox" name="sausage" value="saus">Sausage
                                <br>
                                <input type="checkbox" name="bacon" value="bac">Bacon
                                <br>
                                <input type="checkbox" name="spinach" value="spin">Spinach
                                <br>
                                <input type="checkbox" name="jalopeno" value="jalop">Jalopeno
                            </td>
                        </tr>
                        <tr>
                            <td class="formLabel">
                                Comments
                            </td>
                            <td>
                                <textarea name="comments" cols="40" rows="3"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>
                                <input type="submit" value="Place Order">
                                <input type="reset" value="Reset">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
        <div id="footer">Site by pizza. &copy;2017. </div>
    </div>
    </body>
</html>