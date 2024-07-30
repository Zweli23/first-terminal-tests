import assert from 'assert';
import transportFee from '../transportFee.js'; 

describe('transportFee', function() {
    it('should return the correct transport fee based on the shift', function() {
        // Test cases
        assert.strictEqual(transportFee('morning'), 'R20');
        assert.strictEqual(transportFee('afternoon'), 'R10');
        assert.strictEqual(transportFee('nightshift'), 'free');
        assert.strictEqual(transportFee('evening'), 'Invalid shift');
        assert.strictEqual(transportFee(''), 'Invalid shift');
        assert.strictEqual(transportFee('night'), 'Invalid shift');
    });
});
