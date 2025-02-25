const math = require('../math');

test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
    }); 

test('subtrai 3 - 2 igual a 1', () => {
    expect(math.subtract(3, 2)).toBe(1);
});

test('multiplica 5 * 4 igual a 20', () => {
    expect(math.multiply(5, 4)).toBe(20);
});


test('divide 6 / 2 igual a 3', () => {
    expect(math.divide(6, 2)).toBe(3);
});

test('divide 6 por 0', () => {
    expect(math.divide(6, 0)).toBe(Infinity);
});