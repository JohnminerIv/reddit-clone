const mocha = require("mocha")
const chai = require("chai")
const expect = chai.expect;
chai.should();


const celsiusToFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32
}

it("Should return a correct conversion of c to f", ()=>{
    let temp = celsiusToFahrenheit(0)
    temp.should.be.a('number')
    temp.should.equal(32)
})