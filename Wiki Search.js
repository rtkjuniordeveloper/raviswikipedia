let searchInputEl = document.getElementById("searchInput");
let searchResultsContMain = document.getElementById("searchResults")
let spinEl = document.getElementById("spinner")

function createAndAppendSearchResult3(results) {

    let {
        title,
        link,
        description
    } = results

    // result-item -- div container
    let eachResultSearchContainer = document.createElement("div");
    eachResultSearchContainer.classList.add("result-item");
    searchResultsContMain.appendChild(eachResultSearchContainer);

    // Anchor Element--  result-title
    let titleEl = document.createElement("a");
    titleEl.classList.add("result-title");
    titleEl.textContent = title
    titleEl.href = link
    titleEl.target = "_blank"
    eachResultSearchContainer.appendChild(titleEl)

    //title break Element
    let titleBreak = document.createElement("br");
    eachResultSearchContainer.appendChild(titleBreak)

    //result-url
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link
    urlEl.textContent = link
    eachResultSearchContainer.appendChild(urlEl);

    //url break Element
    let urlBreak = document.createElement("br");
    eachResultSearchContainer.appendChild(urlBreak);

    //link-description
    let DescEl = document.createElement("a");
    DescEl.classList.add("link-description");
    DescEl.textContent = description
    //DescEl.hreh = link
    eachResultSearchContainer.appendChild(DescEl)

}

function displayResultsfun2(searchResults) {
    spinEl.classList.toggle("d-none")
    for (let results of searchResults) {
        createAndAppendSearchResult3(results)

    }

}

function searchInputfun1(event) {
    if (event.key === "Enter") {
        searchResultsContMain.textContent = "";
        spinEl.classList.toggle("d-none")

        let searchword = searchInputEl.value;

        let url = "https://apis.ccbp.in/wiki-search?search=" + searchword;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })

            .then(function(jsondata) {
                //console.log(jsondata)
                let {
                    search_results
                } = jsondata
                displayResultsfun2(search_results)
            });

    }

}

searchInputEl.addEventListener("keydown", searchInputfun1);