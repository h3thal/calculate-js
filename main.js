class button {
    constructor (text, isClick) {
        this.text = text;
        let btn =  document.createElement('button');
        btn.innerText = text;
        document.body.append(btn);
        btn.addEventListener('click', () => {
            console.log(this.text);
        });
        return btn
    }
    setText(text) {
        console.log(text);
    }
}
