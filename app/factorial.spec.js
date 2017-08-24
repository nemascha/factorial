describe('Factorial prime file', function() {

    var module = require('./factorial.js')

    // формальная проверка на тип возвращаемой переменной
    it('Function loaded', function () {
        expect(module.factorial).to.be.an('Function');
    });

    it('test for 0', function () {
        expect(module.factorial(0)).equal(1);
    });

    it('test for 5', function () {
        expect(module.factorial(5)).equal(120);
    });

    it('test for 1', function () {
        expect(module.factorial(1)).equal(1);
    });

    it('test for 17', function () {
        expect(module.factorial(17)).equal(355687428096000);
    });

    it('test for -5', function () {
        expect(module.factorial(-5)).to.be.false;
    });
});