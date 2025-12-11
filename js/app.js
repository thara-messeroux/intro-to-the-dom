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