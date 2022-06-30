// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function fetchUser() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users"); // wait for the backend to get back to us
  const usersData = await users.json(); //wait for backend to turn into frontend readable code
  // console.log(usersData); this displays the array of objects from the json (the frontend readable code)

  //retrieve the html from the html file:
  /*
    `<div class="user-card">
        <div class="user-card__container">
            <h3>User's Name</h3>
            <p><b>Email:</b> email@email.com</p>
            <p><b>Phone:</b> 0000000000</p>
            <p><b>Website:</b> <a href="https://website.website" target="_blank">website.website</a></p>
        </div>
    </div>`
    */

  //now you want to convert the array of objects into the above html, and to manipulate an entire array, you use .map. ignore new-HTML till line 60
  const usersDataHTML = usersData
    .map(
      (user) =>
        /* original-HTML:
      `<div class="user-card">
  <div class="user-card__container">
      <h3>User's Name</h3>
      <p><b>Email:</b> email@email.com</p>
      <p><b>Phone:</b> 0000000000</p>
      <p><b>Website:</b> <a href="https://website.website" target="_blank">website.website</a></p>
  </div>
</div>`
*/

        // new-HTML             //the refer to line 68 for the onclick below
        `<div class="user-card" onclick="showUserPosts(${user.id})"> 
  <div class="user-card__container">
      <h3>${user.name}</h3>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Phone:</b> ${user.phone}</p>
      <p><b>Website:</b> <a href="${user.website}" target="_blank">${user.website}</a></p>
  </div>
</div>`
    )
    .join(""); //note: user is the new argument of an anonymous function that returns the HTML, so it is used to access the object properties
  //console.log(usersData.map((user) => userHTML).join("")); displays the array of objects converted to the above html in string form(from the .join)

  //now call the user-list element since it stores all the user data
  const userListElement = document.querySelector(".user-list");

  //now set all the user data HTML to the user-list element
  //.innerHTML sets the html to the variable
  userListElement.innerHTML = usersDataHTML; //here, userListElements HTML is being set to userDataHTML which is all the user data

  //Now all users have a card(each element in the array), however the properties arent dynamic.

  //So lets look again at the json to see the property names
  // console.log(usersData);
  //here, there is a 'name' property, 'Email', 'Phone', 'Website'
  //remember, the argument that accesses the properties is 'user' in the array map above. thus, you access the properties with user.name, user.email,etc
  //Now, make the above HTML dynamic with the properties(see new-HTML [line 35-42])
}
fetchUser();

//Now we want to reroute the javascript to user.html for the pages when you click on a user

//Create a new function called showUserPosts
//Now add onclick to a new function in the above HTML
function showUserPosts(id) { //the user.id on like 37 is passed into this function
  window.location.href = `${window.location.origin}/user.html`; //reroutes to user.html note:the window.location.origin is a dynamic way of setting the link to the user.html)(e.g:http://127.0.0.1:5500/user.html could change to moe-zart.github.io/users-and-api-practice/user.html)
}
