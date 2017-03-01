QUnit.module('Calculator Test Suite', { beforeEach : function () { initialize(); } });
QUnit.test("Btn5 Click Test", function (assert) {
        var btn,
            result,
            expected;
        assert.expect(1);
        btn = document.getElementById('btn5');
        btn.click();
        result = txtInput.value;
        expected = '5';
        assert.equal(result, expected, 'Expected value: ' + expected + '  Actual value: ' +
    result);
});
QUnit.test("Button Click Test", function (assert) {
        var buttonQuantity = 10;
        assert.expect(buttonQuantity * 2);
        for (var i = 0; i < buttonQuantity; i++) {
            var btn = document.getElementById('btn' + i);
            btn.click();
            var result = txtInput.value[txtInput.value.length-1];
            var expected = String(i);
            assert.equal(result, expected, 'Expected value: ' + expected +
                '  Actual value: ' + result);
            var expectedLength = i < 2 ? 1 : i;
            assert.equal(txtInput.value.length, expectedLength,
                'Expected string length: ' + expectedLength +
                '  Actual value: ' + txtInput.value.length);
} });
QUnit.test("Add Test", function (assert) {
    assert.expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnPlus = document.getElementById('btnPlus');
    btnPlus.click();
    var expected = '30';
    assert.equal(txtResult.value, expected, 'Expected value: ' + expected +
       '  Actual value: ' + txtResult.value);
    expected = '0';
    assert.equal(txtInput.value, expected, 'Expected value: ' + expected +
            '  Actual value: ' + txtInput.value);
});

QUnit.test("Subtract Test", function (assert) {
        assert.expect(2);
        txtInput.value = '10';
        txtResult.value = '20';
        var btnMinus = document.getElementById('btnMinus');
        btnMinus.click();
        var expected = '10';
        assert.equal(txtResult.value, expected, 'Expected value: ' + expected +
            '  Actual value: ' + txtResult.value);
        expected = '0';
        assert.equal(txtInput.value, expected, 'Expected value: ' + expected +
        '  Actual value: ' + txtInput.value);
});
QUnit.test("Clear Entry Test", function (assert) {
        assert.expect(1);
        txtInput.value = '10';
        btnClearEntry.click();
        var expected = '0';
        assert.equal(txtInput.value, expected, 'Expected value: ' + expected +
            '  Actual value: ' + txtInput.value);
});
QUnit.test("Clear Test", function (assert) {
    assert.expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    btnClear.click();
    var expected = '0';
    assert.equal(txtInput.value, expected, 'Expected value: ' + expected +
       '  Actual value: ' + txtInput.value);
    assert.equal(txtResult.value, expected, 'Expected value: ' + expected +
       '  Actual value: ' + txtResult.value);
});
QUnit.test("Initialize Test", function (assert) {
    assert.expect(2);
    txtInput.value = '';
    txtResult.value = '';
    var expected = '0';
    initialize();
    assert.equal(txtInput.value, expected, 'Expected value: ' + expected +
         '  Actual value: ' + txtInput.value);
    assert.equal(txtResult.value, expected, 'Expected value: ' + expected +
         '  Actual value: ' + txtResult.value);
});