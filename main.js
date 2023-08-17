document.addEventListener("DOMContentLoaded", function () {
    const githubApiUrl = "https://api.github.com/users/ogiansouza";

    fetch(githubApiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("repoCount").textContent = data.public_repos;
            document.getElementById("followersCount").textContent = data.followers;
            document.getElementById("followingCount").textContent = data.following;
            document.getElementById("githubLink").href = data.html_url;
        })
        .catch(error => {
            console.error("Erro na requisição: ", error);
        });
});