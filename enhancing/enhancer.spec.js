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
   it('repair(item) restores durability to 100', () => {
      item.repair()
      expect(item.durability).toBe(100)
   })
   it('success increases enhancement property by 1 with a limit of 20', () => {
      item.success()
      expect(item.enhancement).toBe(19)
      item = new enhancer('mana juice', 20, 81)
      expect(item.enhancement).toBe(20)
      item.success()
      expect(item.enhancement).toBe(20)
   })

})