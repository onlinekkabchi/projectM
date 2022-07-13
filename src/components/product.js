import { requestURL } from "../url/url.js";

async function getData() {
    const uri = uri;
    const request = new Request(uri);
    const response = await fetch(request).then((res) => res.json());
    return productJason;
}

function Product(obj) {
    const productDiv = document.createElement("div");
    productDiv.innerHTML += `<div>
    </div>`;
}

export { getData, Product };
