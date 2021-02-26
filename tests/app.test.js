const mocha = require("mocha")
const chai = require("chai")
const mongoose = require('mongoose')
const chaiHttp = require('chai-http');

const app = require("../app")
chai.use(chaiHttp);
chai.should();

after((done) => {
    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
    mongoose.models = {}
    mongoose.modelSchemas = {}
    mongoose.connection.close()
    done()
  })

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
