function Button(text) {
    // assign the value of the text argument or if it is not specified / empty
    // the value is set to "Hello
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function() {
        var self = this;

        this.element = document.createElement('button');
        this.element.innerText = this.text;

        this.element.addEventListener('click', function() {
            alert(self.text);
        });
        
        document.body.appendChild(this.element);
    }
}

var btn1 = new Button('Hi');

btn1.create();