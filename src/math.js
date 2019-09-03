const calculateTip = ((total, perc = 0.3) => {
    const tip = total * perc
    return total + tip
})

const fToC = (temp) => {
    return (temp - 32) / 1.8
}

const cToF = (temp) => {
    return (temp * 1.8) + 32
}


module.exports = {
    calculateTip,
    fToC,
    cToF
}