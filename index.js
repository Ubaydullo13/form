import {validate, createRow} from './functions.js';

const button = document.getElementById('button');
const name = document.querySelector('#name');
const price = document.querySelector('#price');
const category = document.querySelector('#category');
const tbody = document.querySelector('#tbody');
const form = document.querySelector('form');


// Load existing data from LocalStorage
let existingData = JSON.parse(localStorage.getItem('phones')) || [];

form.addEventListener('submit', (e) => {
e.preventDefault();

if(validate(name, price, category)){
  let phone = {
    id: Date.now(),
    name: name.value,
    price: price.value,
    category: category.value,
  };

   // Add the new phone to the existing data array
   existingData.push(phone);

   // Save the new data to LocalStorage
   localStorage.setItem('phones', JSON.stringify(existingData));
  let tr = createRow(phone, existingData.length);
tbody.innerHTML += tr;
  form.reset();
}else{
  console.log("Validation failed");
}
});

document.addEventListener('DOMContentLoaded', function(){
// Populate the table with existing data
existingData.forEach((phone, index) => {
  let tr = createRow(phone, index + 1);
  tbody.innerHTML += tr;
});
let deleteBtn = document.querySelectorAll('.btn-danger');

deleteBtn.length && deleteBtn.forEach(del => {
  del && del.addEventListener('click', function() {
    let isDelete = confirm('Are you sure you want to delete this phone?');
    if(isDelete){
      let id = this.parentNode.getAttribute('data-id').substring(5);
      existingData = existingData.filter(phone => {
        return phone.id != id;
      })
      localStorage.setItem('phones', JSON.stringify(existingData));
      tbody.innerHTML = '';
      existingData.forEach((phone, index) => {
        let tr = createRow(phone, index + 1);
        tbody.innerHTML += tr;
      });
    }
})
});

});
