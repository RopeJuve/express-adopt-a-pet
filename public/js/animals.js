import pets from './petList.js';

const title = document.getElementById('title');
const list = document.getElementById('pet-list');

const pathSegments = window.location.pathname.split('/');
const animal = pathSegments[pathSegments.length - 1];
const animalsList = pets[animal];
console.log(animalsList);
const animalListHTML = animalsList.map((pet, index) => `<li>
                                                   <a href='/animals/${animal}/${index + 1}'>
                                                    <h2>${pet.name}</h2>
                                                    <img src="${pet.url}" alt="${pet.name}">
                                                    <p>${pet.description}</p>
                                                    <span>Age: ${pet.age}</span>
                                                   </a>                                        
                                               </li>`).join('');
console.log(animalListHTML);
list.innerHTML = animalListHTML;
title.innerHTML = `${animal} Page`;
