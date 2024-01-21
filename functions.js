function validate(name, price, category) {
  if (!name.value || name.value.trim().length < 3) {
    alert("Name length must be greater than 3 characters");
    name.focus();
    return false;
  }
  if (!price.value || isNaN(Number(price.value))) {
    alert("Price must be a number");
    price.focus();
    return false;
  }
  if (!category.value) {
    alert("Category is required"); 
    category.focus();
    return false;
  }
  return true;
}

function createRow(phone, index) {
  return `<tr>
  <td>${index}</td>
  <td>${phone.name}</td>
  <td>${phone.price}</td>
  <td>${phone.category}</td>
  <td data-id = 'data_${phone.id}'>
  <button class="btn btn-primary btn-sm">Edit</button>
  <button class="btn btn-danger btn-sm">Delete</button>
</td>
  `;
}

export { validate, createRow };
