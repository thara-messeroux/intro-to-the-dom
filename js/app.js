console.log('Whats up')


/*

document will not work in terminal
node app.js - you will get document is not defined
document represents the html document
has a querySelector method we can use to 
select an element from the screen



*/
// const titleElement = document.querySelector('#main-title')
const titleElement = document.querySelector('.title')

console.dir(titleElement)
console.log(titleElement)

titleElement.textContent = 'Billie is hungry'

// 🎓 You Do
// In index.html, add a < p > tag below the < h1 > and give it a class of "cool".

// Add some content inside the < p > tag.To do this quickly, try typing lorem, then hit Tab on your keyboard to insert placeholder text.

// Use document.querySelector() to select the < p > element with a class of cool and assign it to a variable named paragraphElement.

// Verify that the < p > element was selected by logging out paragraphElement.


const paragraphElement = document.querySelector('.cool')

// console.log(paragraphElement)

// testing
paragraphElement.textContent = 'butterflies everywhere'

console.log(paragraphElement.textContent)

console.dir(paragraphElement)

paragraphElement.style.color = 'dodgerblue'

titleElement.style.color = 'purple'

// font-size // js == fontSize
paragraphElement.style.fontSize = '25px'

paragraphElement.style.textAlign = 'center'

const bodyElement = document.querySelector('body')
console.log(bodyElement)

const h2Element = document.createElement('h2')

h2Element.textContent = "Comments Section"
console.log(h2Element)

// This adds it to the html on the chrome
bodyElement.appendChild(h2Element)



// 🎓 You Do
// Try to select multiple elements in the DOM

// Use document.querySelectorAll() to select all < li > elements that are nested within the element having the id of comments.Assign them to a variable named commentElements.
//     console.log(commentElements) to verify your work.

const commentElements = document.querySelectorAll('#comments li')

console.log(commentElements)

commentElements.forEach(liEl =>{
    console.log(liEl.textContent)
    liEl.style.fontSize = '30px'
})

const googleATag = document.querySelector('#googleLink')

console.log(googleATag)

googleATag.setAttribute('href', 'https://www.google.com/')


const buttonEl = document.querySelector('button')

if(buttonEl.hasAttribute('disabled') === true) {
    buttonEl.removeAttribute('disabled')
}

buttonEl.setAttribute('id', 'submit')

buttonEl.classList.add('btn', 'warning')

buttonEl.classList.replace('btn', 'action-button')

bodyElement.innerHTML = `
    <h1>Whats up doc</h1>
    <p>Man I am <strong>starving<strong></p>`
