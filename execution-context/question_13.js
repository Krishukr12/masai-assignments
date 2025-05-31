// ES6 Syntax Errors and Type Coercion

const checkout = {
    items: [],
    total: 0,
  
    addItem(item) {
      const price = Number(item.price);
  
      if (isNaN(price)) {
        console.error("Invalid price. Must be a number.");
        return;
      }
  
      this.items.push({ ...item, price }); 
  
      this.total += price;
      console.log(`Added "${item.name}" for $${price.toFixed(2)}.`);
    },
  
    getTotal() {
      return `Total: ${this.total.toFixed(2)}`;
    },
  };
  

  checkout.addItem({ name: "Coffee Maker", price: "99.95" });

checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal()); // Expected issue !