window.addEventListener('DOMContentLoaded', function() {
   'use strict';

   class Options {
       constructor (height, width, bg, fontSize, textAlign) {
           this.height = height;
           this.width = width;
           this.bg = bg;
           this.fontSize = fontSize;
           this.textAlign = textAlign;
       }
       createElem () {
           let div = document.createElement('div'),
               main = document.querySelector('.main');
           div.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet dicta, iste mollitia quaerat vitae.';
           div.style.cssText = `background-color: ${this.bg}; \
                          height: ${this.height}px; \
                          width: ${this.width}px; \
                          font-size: ${this.fontSize}px; \
                          text-align: ${this.textAlign};`;
           main.appendChild(div);
       }
   }

   let option = new Options(300, 500, '#FFF000', 16, 'center');

   option.createElem();

});