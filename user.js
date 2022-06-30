async function fetchPosts(){
    const id = localStorage.getItem("id") //gets the id value assossicated with the "id" key from the index.js
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) //the ${id} is the id retrieved in the line above
    //^this will fetch the all posts for the opened user id. note: this is all possible since it is stored in the local storage
    const postsData = await posts.json();
// console.log(postsData); //this displays the array of objects from the json (the frontend readable code)
}
fetchPosts();