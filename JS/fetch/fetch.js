// Fetching a random advice from an API

async function getRandomAdvice() {
  const apiUrl = "https://api.adviceslip.com/advice";

  let response = await fetch(apiUrl);
  if (response.ok) {
    let json = await response.json();
    // Gets the content out of the API to a json file.
    let slip = json.slip;

    // Then puts the respective values inside two different variables.
    let id = slip.id;
    let advice = slip.advice;

  } else {
    // If the API doesn't work or the URL is wrongly written, sends an alert.
    alert("something went wrong.");
  }
}






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


