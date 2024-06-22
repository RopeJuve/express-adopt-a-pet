import pets from './petList.js';

const img = document.getElementById('pet-image');
const name = document.getElementById('pet-name');
const breed = document.getElementById('pet-breed');
const age = document.getElementById('pet-age');
const description = document.getElementById('description');

const pathSegments = window.location.pathname.split('/');
const animal = pathSegments[pathSegments.length - 2];
const index = pathSegments[pathSegments.length - 1];
const animalsList = pets[animal];
const pet = animalsList[index - 1];
img.src = pet.url;
name.innerHTML = pet.name;
breed.innerHTML = pet.breed;
age.innerHTML = pet.age;
description.innerHTML = pet.description;
console.log(animalsList, pet);
