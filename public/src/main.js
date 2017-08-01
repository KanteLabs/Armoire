function searchProductsAPI(e) {
  e.preventDefault();
  fetch(`/search/${e.target.search.value}`)
  .then(res => res.json())
  .then(jsonRes => {
    console.log(jsonRes);
  })
}

function getForm() {
  const form = document.querySelector('#request');
  form.addEventListener('submit', (e) => searchProductsAPI(e));
}

document.addEventListener('DOMContentLoaded', getForm);