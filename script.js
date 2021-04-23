let generate_btn = document.querySelector('.generate_btn')
let clear_btn = document.querySelector('.clear_btn')
let animal_type = document.querySelector('#animal_type')
let num_facts = document.querySelector("#num_facts")


// Get Data from User
generate_btn.addEventListener('click', function () { 
  let animal_value = animal_type.value.toLowerCase()
  
  if (parseInt(num_facts.value) > 20) {
    alert(' Max is 20')
  }
  
  // Fetch Api
  function fetchFacts() {

    fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animal_value}&amount=1`,)
      .then(response => response.text())
      .then(data => {
       let fact = JSON.parse(data).text;
       console.log(fact) 
       var para = document.createElement("p");
       para.classList.add('list-group-item')
       para.classList.add('text-dark')
       para.classList.add('p-3')
       var node = document.createTextNode(fact);
       para.appendChild(node);

       let facts = document.querySelector(".facts");
       facts.appendChild(para);
      })
      .catch(err => console.log(err))
  }

  for(let i=0; i< num_facts.value; i++) {
    fetchFacts()
  }

});
