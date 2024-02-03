///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


//CODE HERE

const summedPrice = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price, 0);

console.log(summedPrice); // 26.97

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

/**
 * Calculates the final price after applying tax and subtracting a coupon value.
 * @param {number} cartTotal - The total price of the cart.
 * @param {number} couponValue - The value of the coupon to be subtracted.
 * @param {number} tax - The tax rate as a decimal (e.g., 0.06 for a 6% tax).
 * @returns {number} - The final price after tax and coupon deduction.
 */

function calcFinalPrice(cartTotal, couponValue, tax) {
    // Calculate the tax amount
    const taxAmount = cartTotal * tax; 

    // Calculate the final price after tax and coupon deduction
    const finalPrice = cartTotal + taxAmount - couponValue;

    // Return the final price
    return finalPrice;
}

// Example usage:

const cartTotal = 100; // Example cart total
const couponValue = 10; // Example coupon value
const tax = 0.06; // Example tax rate (6%)

// Calculate the final price
const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
console.log("Final Price:", finalPrice);


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    Customer Object:

    Name:
        Data Type: String
        Reason: To store the customer's name for personalized communication and identification.

    Email:
        Data Type: String
        Reason: To store the customer's email address for communication and account identification.

    Phone Number:
        Data Type: String
        Reason: To store the customer's phone number for communication and order confirmation purposes. Using a string allows flexibility in formatting (e.g., including country codes).

    Address:
        Data Type: Object
            Properties:
                Street: String
                City: String
                State: String
                Zip Code: String
        Reason: To store the customer's address for delivery purposes.
    Preferred Payment Method:
        Data Type: String 
        Reason: To store the customer's preferred payment method for streamlined checkout and order processing.

    Order History:
        Data Type: Array of Objects
        Reason: To store the customer's order history for reference, reordering, and analysis purposes. Each object within the array could represent a past order with details such as order ID, date, items ordered, total amount, etc.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: "Zentalm Genet",
    email: "zentalm@example.com",
    phoneNumber: "+1469236744",
    address: {
        street: "123 Main Street",
        city: "Dallas",
        state: "Texas",
        zipCode: "75039"
    },
    preferredPaymentMethod: "Credit Card",
    orderHistory: [
        {
            orderId: "123456",
            date: "2024-01-31",
            items: ["Pizza", "Salad", "Soda"],
            totalAmount: 35.99
        },
        {
            orderId: "789012",
            date: "2024-01-28",
            items: ["Pasta", "Garlic Bread"],
            totalAmount: 22.50
        }
    ]
};
