import { requestURL } from "./url.js";
import { cutequery } from "./make-cutie-query.js";
import CreateProductCard from "./product-card.js";

function drawProductCardVonRequestURL() {
    Promise.all(
        requestURL.map((uri) => {
            fetch(uri)
                .then((res) => res.json())
                .then((obj) => {
                    obj.data.list.forEach((el) => {
                        window.localStorage.setItem(
                            el["goodsNo"],
                            JSON.stringify(el)
                        );
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        })
    );
    return;
}

function drawProductCardVonLocalStorage() {
    const productCardList = cutequery(".product-card-list");
    if (!Object.keys(localStorage)) {
        return;
    }
    const keys = Object.keys(localStorage);
    let len = keys.length;
    productCardList.innerHTML = "";

    while (len--) {
        const ProductInfo = JSON.parse(localStorage.getItem(keys[len]));
        CreateProductCard(ProductInfo, productCardList);
    }
}

function drawForInfiniteScroll() {
    const productCardList = cutequery(".product-card-list");
    if (!Object.keys(localStorage)) {
        return;
    }
    const keys = Object.keys(localStorage);
    let len = keys.length;

    while (len--) {
        const ProductInfo = JSON.parse(localStorage.getItem(keys[len]));
        CreateProductCard(ProductInfo, productCardList);
    }
}

export {
    drawProductCardVonRequestURL,
    drawProductCardVonLocalStorage,
    drawForInfiniteScroll,
};
