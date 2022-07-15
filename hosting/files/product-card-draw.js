import { requestURL } from "./url.js";
import { cutequery } from "./make-cutie-query.js";
import CreateProductCard from "./product-card.js";
const main = cutequery("main");

function drawProductCardVonRequestURL() {
    Promise.all(
        requestURL.map((uri) => {
            fetch(uri)
                .then((res) => res.json())
                .then((obj) => {
                    obj.data.list.forEach((el) => CreateProductCard(el, main));
                    obj.data.list.forEach((el) => {
                        window.localStorage.setItem(
                            el["goodsNo"],
                            JSON.stringify(el)
                        );
                    });
                });
        })
    );
    return;
}

export { drawProductCardVonRequestURL };
