var api = {
  getBio(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    console.log(url);
    return fetch(url).then((res) => res.json());
  },
  getRepos(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/user/${username}/repos`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;

// fetch(url)
// .then(function(res) {
//    // console.log(res);
//    return res.json();
// })
// .then(function(jsonRes){
//    console.log(jsonRes);
// })
// .catch(function(err) {
//     console.log(err);
// });
