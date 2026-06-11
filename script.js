function add(a, b) {
    return a + b;
}

function calculate() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const res = add(a, b);
    document.getElementById('result').textContent = isNaN(res) ? 'Invalid input' : res;
}

// экспорт для тестов (при использовании Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add };
}