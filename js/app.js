console.log('I am working')

const titleElement = document.querySelector('#main-title');
console.dir(titleElement);

const btn = document.querySelector('button');
console.dir(btn);

const paragraphElement = document.querySelector('.cool');
console.dir(paragraphElement);

paragraphElement.textContent = 'The placeholder text is gone!';

console.log(paragraphElement.textContent);
// prints: 'The placeholder text is gone!"

if (paragraphElement.textContent !== '') {
    console.log('The paragraph has text content!');
}

paragraphElement.style.color = 'blue';

// 1. Select the body element, so we can attach new elements to it
const bodyElement = document.querySelector('body');

console.dir(bodyElement);

// 2. Create a new element (but it is not yet in the DOM and invisible at first)
const h2Element = document.createElement('h2');

// 3. Give your new element some content
h2Element.textContent = 'Comments section';

// 4. Place/attach/append the element in the DOM
bodyElement.appendChild(h2Element);




