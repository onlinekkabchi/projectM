function showSearchPage() {
    const headerMenu = document.querySelector(".header-menu");
    const searchPageDiv = document.createElement("div");
    searchPageDiv.className = "search-page";
    searchPageDiv.innerHTML += `
        <div class="search-page-box"
        <div class="search-page--bar">
        <button class="search-page--bar--search-btn-icon">검색</button>
            <input class="search-page--bar--search-input" type="text" placeholder="상품명검색">
        </div>
    `;
    return headerMenu.appendChild(searchPageDiv);
}

function hideSearchPage() {
    const searchPage = document.querySelector(".search-page");
    searchPage.remove();
}

function getDataForSearch() {
    let dic = [];
    Promise.all(
        requestURL.map((uri) => {
            fetch(uri).then((res) => res.json());
            // .then(result => );
        })
    );
}

function searchProducts() {
    const getUserSearchInput = document.querySelector(
        ".search-page--bar--search-input"
    ).value;
}

export { showSearchPage, hideSearchPage };
