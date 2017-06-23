import expect, { createSpy, spyOn, isSpy } from 'expect'
import numerology from '../calculate/calculate'
import assert from 'assert'

describe('calculate', ()=> {
  let number = new numerology(new Date('1988/05/25'))
  describe('birthdayToNumber', ()=> {
    it('should equal 26 when the value is 1988', ()=> {
      expect(
        number.birthdayToNumber(1988)
      ).toEqual(26)
    })
  })
})