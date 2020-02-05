function myFunction(text) {
    console.log(text)
}

function test(text, callback) {
    setTimeout(alert(text), 2000);
    callback();
}

function runCallback() {
    alert('Run callback function');
}

myFunction('test ok');

test('Test', runCallback)