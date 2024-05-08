
var apiKey="950ac5a02bbc49b4ad070f76f1fce3b9"

var url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`

fetch(url).then(res=>res.json()).then(data=>displayNews(data.articles))


displayNews(articles)

function displayNews(articles){

    let htmlData =``

    for(let a of articles){

        htmlData+=`
            <div class="col-4">
            <div class="card" style="width: 18rem;">
                <img src="${a.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${a.title}</h5>
                <p class="card-text">${a.description && a.description.slice(0,60)}</p>
                <a href="#" class="btn btn-primary">View More</a>
                </div>
            </div>

            </div>
            
            `
    }
    document.querySelector("#root").innerHTML=htmlData
}