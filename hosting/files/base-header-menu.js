import { cutequery, allcutequery } from "./make-cutie-query.js";

function showSearchPage() {
    const targetBox = cutequery(".header-protection");
    const searchPage = `
    <div class="search-page">
        <div class="search-page--bar">
            <input class="search-page--bar search-bar--input" name="userinput" type="text" placeholder="상품명검색">
            <button class="search-page--bar search-bar--btn-icon">검색</button>
        </div>
    </div>
    `;
    return targetBox.insertAdjacentHTML("beforeend", searchPage);
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
