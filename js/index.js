function Button(text) {
	// przypisanie wartości argumentu text lub jeśli nie jest podany/pusty to
    // przyspisywana jest wartosc "Hello"
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