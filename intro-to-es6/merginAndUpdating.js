// You are given two nested objects: profile and updates. Your task is to merge the two objects using the spread operator,
//  ensuring that specific nested properties in updates overwrite those in profile.

// Example Input
// const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };
// const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

// Example Output:
// { name: "Charlie", age: 30, address: { city: "San Francisco", zipcode: "94109", country: "USA" } }



const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };
const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };
const finalObj={...profile,...updates};

console.log(finalObj);