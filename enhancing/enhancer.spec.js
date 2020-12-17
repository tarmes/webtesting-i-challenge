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
      item = new enhancer('mana juice')
   })
   it('is defined', () => {
      expect(enhancer).toBeDefined()
   })
   
})