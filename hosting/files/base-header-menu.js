import { cutequery } from "./make-cutie-query.js";

function showSearchPage() {
    const targetBox = cutequery("header");
    const searchPage = `
    <div class="search-page">
    <div class="search-page-box"
        <div class="search-page--bar">
            <button class="search-page--bar--search-btn-icon">검색</button>
            <input class="search-page--bar--search-input" type="text" placeholder="상품명검색">
        </div>
        <div class="search-page--result-box"></div>
    </div>
    `;
    return targetBox.insertAdjacentHTML("afterend", searchPage);
}

function hideSearchPage() {
    const searchPage = cutequery(".search-page");
    searchPage.remove();
}

export { showSearchPage, hideSearchPage };
