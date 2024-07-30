import assert from 'assert';
import isFromGauteng from '../isFromGauteng.js';

describe('Gauteng number plate', function() {
    it('should show Gauteng reg number', function() {
        assert.equal(isFromGauteng('DR 45 LR GP'), true);
    });

    it('should show reg number that are not from Gauteng', function() {
        assert.equal(isFromGauteng('CJ 123 908'), false);
    });

    it('should return false for an empty string', function() {
        assert.equal(isFromGauteng(''), false);
    });

    it('should return false for a string with no province code', function() {
        assert.equal(isFromGauteng('ABC 123'), false);
    });
});
