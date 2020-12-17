
class Enhancer {
  constructor(name, enhancement, durability) {
    this.name = name
    this.enhancement = enhancement
    this.durability = durability
  }
  success(item) {
    if ( this.enhancement < 20 ) {
      this.enhancement += 1
    }    
    return { ...item };
  }
  
  fail(item) {
    return { ...item };
  }
  
  repair(item) {
    this.durability = 100
    return { ...item };
  }
  
  get(item) {
    return { ...item };
  }
}

module.exports = Enhancer;
// - a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.
// - a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success.
// - a `fail(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement failure.
// - a `get()` method for use when working on the stretch problem.