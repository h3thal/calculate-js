let arrMathOperation = ['+','-', '*', '/'];
let arrNumber = [...Array(10).keys()];
let arrNumbAndMath = [...arrMathOperation, ...arrNumber];
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
arrNumbAndMath.forEach(element => {
    new Button(element);
});
// создать свою функцию eval с помощью регулярки