// console.log('okkkk')

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}
/*
1. Get the element where you want to add the new elements
2. Create child element
3. Set innerText or InnerHTML
4.appendChild
 */

function displayPosts(posts) {
    const postContainer = document.getElementById('posts-container');
    for (const post of posts) {
        // console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post ${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}

loadPosts();

