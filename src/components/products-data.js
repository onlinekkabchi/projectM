import { requestURL } from "../url/url.js";

function getDataForProducts() {
    Promise.all(
        requestURL.map((uri) => {
            fetch(uri)
                .then((res) => res.json())
                .then((result) => Products(result));
        })
    );
}

function Products(obj) {
    const main = document.querySelector("main");
    const productList = obj.data.list;

    productList.forEach((el) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product-box";
        const calculateSalePrice = el.normalPrice * (el.saleRate / 100);

        productDiv.innerHTML += `
            <a href=${el.linkUrl} target="_blank">
                <img class="product-box--img" src=${el.imageUrl}>
            </a>    
            <p class="product-box--brand-name">${el.brandName}</p>
            <p class="product-box--goods-name">${el.goodsName}<p>
            <div class="product-box--price-info">
                <p class="product-box--price--normal-price">${el.normalPrice}<p>
                <p class="product-box--price--sale-rate">${el.saleRate}%<p>
            </div>
            <p class="product-box saleprice">${calculateSalePrice}</p>

        `;
        main.appendChild(productDiv);
    });
    console.log(obj.data.list);
}

export { Products, getDataForProducts };
