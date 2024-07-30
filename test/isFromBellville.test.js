import assert from 'assert'
import isFromBellville from '../isFromBellville.js'

describe('function isFromBellville' , function(){
    it('should number plate from Bellville' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    })

    it('should number plate that are not from Bellville' , function(){
        assert.equal(isFromBellville('CJ 123'), false);

    });

});