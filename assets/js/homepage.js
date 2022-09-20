var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');



var getUserRepos = function(user) {
  var apiUrl = 'https://api.github.com/users/' + user + '/repos';

  fetch(apiUrl).then(function(response) {
 response.json().then(function(data) {
  displayRepos(data, user)
 }) 

 });

 console.log("outside");
};

var displayRepos = function(repos, searchTerm) {
  console.log(repos);
  console.log(searchTerm);
}


var formSubmitHandler = function(event) {
  event.preventDefault();

  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);
    nameInputEl.value = '';

  } else {
    alert('please enter a github username');
  }
  console.log(event)
}
  
 userFormEl.addEventListener("submit", formSubmitHandler);



console.log("heyfuck you")