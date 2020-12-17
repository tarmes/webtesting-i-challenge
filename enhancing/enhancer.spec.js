const enhancer = require('./enhancer.js');

describe('Sanity and intro', () => {
   it('works', () => {
      expect(2 + 2).toBe(4)
   })
   it('everything working', () => {
      expect({}).not.toBe({})
      expect({}).toEqual({})
   })
})

describe('Item Class', () => {
   let item
   beforeEach(() => {
      item = new enhancer('mana juice', 18, 81)
   })
   it('is defined', () => {
      expect(enhancer).toBeDefined()
   })
   it('can be used to make instances of enhancer', () => {
      expect(item).toBeInstanceOf(enhancer)
   })
   it('enhancers have an enhancement and durability property', () => {
      expect(item).toHaveProperty('enhancement')
      expect(item).toHaveProperty('durability')
   })
   it('properties represent data correctly', () => {
      expect(item.name).toBe('mana juice')
      expect(item.enhancement).toBe(18)
      expect(item.durability).toBe(81)
   })
})

describe('repair(item) test', () => {
   let item
   beforeEach(() => {
      item = new enhancer('mana juice', 18, 81)
   })
   it('repair(item) restores durability to 100', () => {
      item.repair()
      expect(item.durability).toBe(100)
   })
})

describe('success(item) tests', () => {
   let item
   beforeEach(() => {
      item = new enhancer('mana juice', 18, 81)
   })
   it('success increases enhancement property by 1', () => {
      item.success()
      expect(item.enhancement).toBe(19)
   })
   it('success(item) does not increase enhancement greater than 20', () => {
      item.success()
      expect(item.enhancement).toBe(19)
      item = new enhancer('mana juice', 20, 81)
      expect(item.enhancement).toBe(20)
      item.success()
      expect(item.enhancement).toBe(20)
   })
})

describe('fail(item) tests', () => {
   let item      
   it('if the enhancement level is greater than 16, it decreases by 1', () => {
      item = new enhancer('mana juice', 18, 81)
      item.fail()
      expect(item.enhancement).toBe(17)
      expect(item.durability).toBe(71)
      item = new enhancer('mana juice', 15, 81)
      expect(item.enhancement).not.toBe(14)
      expect(item.durability).not.toBe(71)
   })
   it('if the enhancement is less than fifteen, the durability decreases by 5', () => {
      item = new enhancer('mana juice', 14, 81)
      item.fail()
      expect(item.enhancement).toBe(14)
      expect(item.durability).toBe(76)
      item = new enhancer('mana juice', 15, 81)
      expect(item.enhancement).toBe(15)
      expect(item.durability).not.toBe(76)
   })
   it('if the enhancement level if 15 or greater, the durability is decreased by 10', () => {
      item = new enhancer('mana juice', 15, 81)
      item.fail()
      expect(item.enhancement).toBe(15)
      expect(item.durability).toBe(71)
      item = new enhancer('mana juice', 14, 81)
      expect(item.enhancement).toBe(14)
      expect(item.durability).not.toBe(71)
   })
   it('if the enhancement level is 15, the durability decreases by ten but the enhancement does not change', () => {
      item = new enhancer('mana juice', 15, 81)
      item.fail()
      expect(item.enhancement).toBe(15)
      expect(item.enhancement).not.toBe(16)
      expect(item.durability).toBe(71)
      item = new enhancer('mana juice', 17, 81)
      item.fail()
      expect(item.enhancement).toBe(16)
      expect(item.enhancement).not.toBe(17)
      expect(item.durability).toBe(71)
   })
})