const postListElement = document.querySelector('.post-list'); //refer to line 10
async function fetchPosts(){
    const id = localStorage.getItem("id") //gets the id value assossicated with the "id" key from the index.js
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) //the ${id} is the id retrieved in the line above
    //^this will fetch the all posts for the opened user id. note: this is all possible since it is stored in the local storage
    const postsData = await posts.json();
 //console.log(postsData); //this displays the array of objects from the json (the frontend readable code)

//Now you want to convert all these elements of the array into html using the .map function
//then set the html into the innerHTML of '.post-list'. This makes sure all the posts repeat under the 'post-list' div
postListElement.innerHTML = postsData.map(post=> `<div class="post">
<div class="post__title">
  ${post.title}
</div>
<p class="post__body">
  ${post.body}
</p>
</div>`).join('') //converts the array of objects to string
}
//Now add an onChange function called onSearchChange() in the user.html file, and access the function here.
async function onSearchChange(event){
//what we want to do is have an input to search the value of an id
//so we pass in 'event' as an argument to store te id value through event.target.value
const id = event.target.value;
//now copy the above function so that we fetch the posts of each searched id
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) //this works as 'id' is now the event target value which is the searched id
    const postsData = await posts.json();
    postListElement.innerHTML = postsData.map(post=> `<div class="post">
        <div class="post__title">
            ${post.title}
        </div>
            <p class="post__body">
                ${post.body}
            </p>
        </div>`).join('')
}
fetchPosts();
