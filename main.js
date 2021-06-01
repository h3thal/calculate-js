let arrMathOperation = ['+','-', '*', '/'];
let arrNumber = [...Array(10).keys()];
var arrObjectButton = [];

class Button {
    constructor (text) {
        this.text = text;
        let elem =  document.createElement('button');
        this.getElem = elem;
        elem.innerText = text;
        document.body.append(elem);
        elem.addEventListener('click', () => {
            console.log(this.text);
        });
        arrObjectButton.push(this);
    }
}
new Button('1');
new Button('2');
arrMathOperation.forEach(element => {
    new Button(element);
});