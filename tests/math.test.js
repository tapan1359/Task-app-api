const { calculateTip, cToF, fToC } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, 0.3)
    expect(total).toBe(13)
})

test('should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(13)
})

test('should convert 32F to 0C', () => {
    const temp = fToC(32)
    expect(temp).toBe(0)
})

test('should convert 0C to 32F', () => {
    const temp = cToF(0)
    expect(temp).toBe(32)
})