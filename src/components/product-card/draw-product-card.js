import { requestURL } from "../../url/url.js";
import { cutequery } from "../etc/make-cutie-query.js";
import CreateProductCard from "./product-card.js";

function drawProductCardVonRequestURL() {
    Promise.all(
        requestURL.map((uri) => {
            fetch(uri)
                .then((res) => res.json())
                .then((obj) => {
                    console.log(obj);
                });
        })
    );
}

export { drawProductCardVonRequestURL };
