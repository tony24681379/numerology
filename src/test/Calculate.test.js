import expect, { createSpy, spyOn, isSpy } from 'expect'
import {birthdayToNumber} from '../components/Caculate'
import assert from 'assert'

describe('Calculate', ()=> {
  describe('birthdayToNumber', ()=> {
    it('should 26 when the value 1988', ()=> {
      expect(
        birthdayToNumber(1988)
      ).toEqual(26)
    });
  });
});