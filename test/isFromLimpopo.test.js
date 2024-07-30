import assert from 'assert'
import isFromLimpopo from '../isFromLimpopo.js'

describe('limpopo reg number' , function(){
    it('should show limpopo registration number' , function(){
        assert.equal(isFromLimpopo('KTR 990 L'), true);
    })
    it('should show registration number that are not from limpopo' , function(){

        assert.equal(isFromLimpopo('W 990 N'), false);
    });

});