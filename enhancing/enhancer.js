
class Enhancer {
  constructor(name) {
    this.name = name
    this.enhancement = 15
    this.durability = 45
  }
  success(item) {
    return { ...item };
  }
  
  fail(item) {
    return { ...item };
  }
  
  repair(item) {
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