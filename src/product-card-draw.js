import { requestURL } from "./url/url.js";
import { cutequery } from "./make-cutie-query.js";
import CreateProductCard from "./product-card.js";
const main = cutequery("main");

function drawProductCardVonRequestURL() {
    Promise.all(
        requestURL.map((uri) => {
            fetch(uri)
                .then((res) => res.json())
                .then((obj) => {
                    obj.data.list.map((el) => {
                        CreateProductCard(el, main);
                    });
                });
        })
    );
}

export { drawProductCardVonRequestURL };
