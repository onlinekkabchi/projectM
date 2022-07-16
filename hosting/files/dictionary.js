import { cutequery } from "./make-cutie-query.js";
import CreateProductCard from "./product-card.js";

function Dictionary() {
    const userInput = cutequery(".search-page--bar--search-input");
    userInput.addEventListener("keyup", (e) => {
        const val = e.target.value.toUpperCase().replace(/\s/g, "");
        console.log(val);
        Dictionary.prototype.findProductInDictionary(val);
    });
}

Dictionary.prototype.findProductInDictionary = function (usersval) {
    const productCardList = cutequery(".product-card-list");
    productCardList.innerHTML = "";
    const keys = Object.keys(localStorage);
    let len = keys.length;

    while (len--) {
        const ProductInfo = JSON.parse(localStorage.getItem(keys[len]));
        const goodsinfo = ProductInfo.goodsName
            .toUpperCase()
            .replace(/\s/g, "");
        const brandinfo = ProductInfo.brandName
            .toUpperCase()
            .replace(/\s/g, "");
        goodsinfo.includes(usersval) || brandinfo.includes(usersval)
            ? CreateProductCard(ProductInfo, productCardList)
            : "";
    }
};

export { Dictionary };
