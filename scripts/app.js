//your code here
const telephoneUrl = 'https://telephone-assessment.herokuapp.com/api/v1/contacts';
const charactersUl = document.querySelector('#characters');

function fetchCharacters(){
  fetch(telephoneUrl)
    .then(response => response.json())
    .then(response => renderCharacters(response.data))
}

function renderCharacters(characters){
  characters.forEach(character => {
    let newLi = document.createElement("li");
    newLi.innerHTML = `<img src=${character.imageURL}>
                      <span>Name: ${character.name}, Phone Number: ${character.phone}</span>
                      <p>${character.message}</p>
                      <a href=./contact.html>Leave ${character.name} a message</a>`;
    charactersUl.append(newLi);
  })
}

document.addEventListener("DOMContentLoaded", fetchCharacters());