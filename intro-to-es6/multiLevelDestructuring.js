// You are working with an array of objects where each object represents a person with their name and address details.
// Use multi-level destructuring to extract the person's name, city, and street information.

// Example Input:
// const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]

// Example Output:
// ["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]

const people = [
  {
    name: "Alice",
    address: { city: "New York", street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];

const result = people.map((person) => {
  const { name,address:{city,street:{name:StreetName}} } = person;
  return `${name} lives in ${city} on ${StreetName}`;
});


console.log(result)