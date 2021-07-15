const http = new easyHTTP();

// Get Posts

const posts = http.get('https://jsonplaceholder.typicode.com/posts');

console.log(posts);
