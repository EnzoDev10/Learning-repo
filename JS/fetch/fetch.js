
// * using fetch to get the author of the last commit of a repository.

async function get_commits() {
  let commitsUrl =
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";

    // the await keyword is used only inside async functions 
  let comResponse = await fetch(commitsUrl);

  let commits = await comResponse.json();

  alert(commits[0].author.login);

  /* the same outcome could be achieved with pure promises syntax:
/* fetch(url)
.then(response => response.text())
.then(text => alert(text.slice(0, 100) + '...')); */
}
