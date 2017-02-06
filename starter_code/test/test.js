var should = require('chai').should();
var ex = require('../exercise.js');

describe('Soccer Field Exercise', function() {
    it('No score for ball coordinates (139,109)', function() {
        ex.goalCheck(139, 109).should.equal(false);
    });

    it('No score for ball coordinates (350,250)', function() {
        ex.goalCheck(350, 250).should.equal(false);
    });

    it('No score for ball coordinates (640,390)', function() {
        ex.goalCheck(640, 390).should.equal(false);
    });

    it('Score for ball coordinates (25,110)', function() {
        ex.goalCheck(25, 110).should.equal(true);
    });

    it('Score for ball coordinates (137,250)', function() {
        ex.goalCheck(137, 250).should.equal(true);
    });

    it('Score for ball coordinates (641,250)', function() {
        ex.goalCheck(641, 250).should.equal(true);
    });

    it('Score for ball coordinates (753,388)', function() {
        ex.goalCheck(753, 388).should.equal(true);
    });
});