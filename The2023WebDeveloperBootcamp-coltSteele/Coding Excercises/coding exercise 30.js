//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
  nameFirst: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
};

//YOUR CODE GOES DOWN HERE:
// use template literals will make this task easy for us
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
console.log(fullAddress);
