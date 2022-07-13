import { requestURL } from "../url/url.js";

async function getData() {
    const uri = requestURL;
    const request = new Request(uri);
    const response = await fetch(request)
        .then((res) => res.json())
        .then((result) => Products(result));
    return response;
}

function Products(obj) {
    const main = document.querySelector("main");
    const productListDiv = document.createElement("div");
    productListDiv.className = "product-list";
    const productList = obj.data.list;

    productList.forEach((el) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product-box";
        const calculateSalePrice = el.normalPrice * (el.saleRate / 100);
        productDiv.innerHTML += `
            <img class="product-box--img" src=${el.imageUrl}>
            <p class="product-box--brand-name">${el.brandName}</p>
            <p class="product-box--goods-name">${el.goodsName}<p>
            <div class="product-box--price-info">
                <p class="product-box--price--normal-price">${el.normalPrice}<p>
                <p class="product-box--price--sale-rate">${el.saleRate}%<p>
            </div>
            <p class="product-box saleprice">${calculateSalePrice}</p>

        `;
        productListDiv.appendChild(productDiv);
    });

    main.appendChild(productListDiv);
    console.log(obj.data.list);
}

export { getData, Products };
