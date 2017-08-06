/* Run the code in:
https://stephengrider.github.io/JSPlaygrounds/ 
*/

const posts = [
  { id: 4, title: "Hi" },
  { id: 25, title: "Bye" },
  { id: 36, title: "See you" }
];

// Array with all the data
posts

// Object were the key is the id of the post
const state = _.mapKeys(posts, 'id')
state
state["4"]
