const mocha = require("mocha")
const chai = require("chai")
const chaiHttp = require('chai-http');

const app = require("../app")
const expect = chai.expect
chai.use(chaiHttp);
chai.should();

describe("site", function() {
it("Should return a homepage", () => {
    chai.request(app.app)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            // res.text.should.contain('Hello from index')
         });
});
});
