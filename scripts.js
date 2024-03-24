const apiKey = process.env.NEWS_API_KEY;
//this does NOT work to provide the API key - keep getting "invalid key" error
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        //TO DO:  Add a function call to display the news
        displayNews(data.articles);
    } catch (error) {
        console.error("there was an error", error);
    }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');
        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);
    }

}