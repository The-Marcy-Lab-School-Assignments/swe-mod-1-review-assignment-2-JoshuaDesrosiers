// Part A: Create an object called cart with customerName, totalPrice, and itemCount
const cart = {
  customerName: "Alex",
  totalPrice: 0,
  itemCount: 0
};

// Part B: Use dot notation to add a new property `items`
cart.items = ['apples', 'bananas', 'cherries'];

// Part C: Update itemCount to 3 and totalPrice to 99.99
cart.itemCount = 3;
cart.totalPrice = 99.99;

// Part D: Remove the customerName property from the cart object
delete cart.customerName;

// Part E: Log the final cart object to verify all changes were made correctly
console.log(cart);
