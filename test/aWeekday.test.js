import assert from 'assert'
import isWeekday from '../aWeekday.js'

describe('is a weekday', function () {
    it('should print saturday', function () {
        assert.equal(isWeekday('Saturday'), false);
    })
        it('should print unday', function () {
        assert.equal(isWeekday('Sunday'), false);
        })
        it('should print Monday', function () {
        assert.equal(isWeekday('Monday'), true);
        })
        it('should print tuesday', function () {
        assert.equal(isWeekday('Tuesday'), true);
        })
        it('should print Wednesday', function () {
        assert.equal(isWeekday('Wednesday'), true);
        })
        it('should print Thursday', function () {
        assert.equal(isWeekday('Thursday'), true);
        })
        it('should print friday', function () {
        assert.equal(isWeekday('Friday'), true);

    
    });

});