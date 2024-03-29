import { cutequery } from "./make-cutie-query.js";
import CreateProductCard from "./product-card.js";
import { addSearchResultTag } from "./tagging.js";

function Dictionary() {
    const userInput = cutequery("input[name=userinput]");
    const searchBtn = cutequery(".search-bar--btn-icon");

    function startSearchParty(e) {
        if (e.key === "Enter") {
            addSearchResultTag(e.target.value);
            e.currentTarget.value = "";
            return;
        }
        const val = e.target.value.toUpperCase().replace(/\s/g, "");
        Dictionary.prototype.findProductInDictionary(val);
    }

    userInput.addEventListener("keyup", (e) => {
        startSearchParty(e);
    });
    searchBtn.addEventListener("click", () => {
        addSearchResultTag(userInput.value);
        const val = userInput.value.toUpperCase().replace(/\s/g, "");
        Dictionary.prototype.findProductInDictionary(val);
        return (userInput.value = "");
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
