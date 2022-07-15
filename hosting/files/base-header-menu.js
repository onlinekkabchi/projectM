import { cutequery, allcutequery } from "./make-cutie-query.js";

function showSearchPage() {
    const targetBox = cutequery("header");
    const searchPage = `
    <div class="search-page">
    <div class="search-page-box">
        <div class="search-page--tags"></div>
        <div class="search-page--bar">
            <button class="search-page--bar--search-btn-icon">검색</button>
            <input class="search-page--bar--search-input" type="text" placeholder="상품명검색">
        </div>
        
    </div>
    `;
    return targetBox.insertAdjacentHTML("afterend", searchPage);
}

function hideSearchPage() {
    const searchPage = cutequery(".search-page");
    searchPage.remove();
}

function showOnlySaleProduct() {
    const saleProducts = allcutequery(".is-sale--false");
    saleProducts.forEach((element) => {
        element.parentNode.parentNode.style.display = "block";
    });
}

function hideOnlySaleProduct() {
    const saleProducts = allcutequery(".is-sale--false");
    saleProducts.forEach((el) => {
        el.parentNode.parentNode.style.display = "none";
    });
}

function showMusinsaOnlyProduct() {
    const musinsaOnlyProducts = allcutequery(".is-exclusive--false");
    musinsaOnlyProducts.forEach(
        (el) => (el.parentNode.parentNode.style.display = "none")
    );
}

function showAllProductIncludeNotMusinsaOnly() {
    const musinsaOnlyProducts = allcutequery(".is-exclusive--false");
    musinsaOnlyProducts.forEach((el) => {
        el.parentNode.classList.contains("check-sold-out--false")
            ? (el.parentNode.parentNode.style.display = "block")
            : "";
    });
}

function showSoldOutProduct() {
    const soldOutProducts = allcutequery(".sold-out--true");
    soldOutProducts.forEach((el) => {
        el.style.display = "block";
    });
}

function hideSoldOutProduct() {
    const soldOutProducts = allcutequery(".sold-out--true");
    soldOutProducts.forEach((el) => {
        el.style.display = "none";
    });
}

export {
    showSearchPage,
    hideSearchPage,
    showOnlySaleProduct,
    hideOnlySaleProduct,
    showMusinsaOnlyProduct,
    showAllProductIncludeNotMusinsaOnly,
    showSoldOutProduct,
    hideSoldOutProduct,
};
