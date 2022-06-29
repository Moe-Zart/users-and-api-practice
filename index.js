// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
async function fetchUser() {
    const users =await fetch("https://jsonplaceholder.typicode.com/users") // wait for the backend to get back to us
    const usersData =await users.json(); //wait for backend to turn into frontend readable code
  // console.log(usersData); this displays the array of objects from the json (the frontend readable code)
  
  //retrieve the html from the html file 
  const userHTML= `<div class="user-card">
  <div class="user-card__container">
    <h3>User's Name</h3>
      <p><b>Email:</b> email@email.com</p>
      <p><b>Phone:</b> 0000000000</p>
      <p><b>Website:</b> <a href="https://website.website" target="_blank">website.website</a></p>
  </div>
</div>`
  //now you want to convert the array of objects into the above html, and to manipulate an entire array, you use .map

console.log(usersData.map( user => userHTML))

}
fetchUser();
