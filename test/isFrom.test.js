import assert from 'assert';
import isFrom from '../isFrom.js'; // Ensure the path is correct based on your file structure

describe('isFrom', function() {
    it('should return true for registration numbers from Paarl', function() {
        assert.equal(isFrom('CJ 98912', 'CJ'), true);
    });

    it('should return false for registration numbers not from Bellville', function() {
        assert.equal(isFrom('CJ 98912', 'CY'), false);
    });

    it('should return true for registration numbers from Bellville', function() {
        assert.equal(isFrom('CY 12345', 'CY'), true);
    });

    it('should return false for an empty prefix', function() {
        assert.equal(isFrom('CJ 98912', ''), false);
    });

    it('should return false for an empty registration number', function() {
        assert.equal(isFrom('', 'CJ'), false);
    });

    it('should handle case sensitivity correctly', function() {
        assert.equal(isFrom('cj 98912', 'CJ'), false); // Case-sensitive match
    });
});
