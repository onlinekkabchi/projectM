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
                    obj.data.list.map((el) => {
                        CreateProductCard(el, main);
                    });
                });
        })
    );
}

function findProductCardVonUserChoice(usersExpectedChoice) {
    let numbering = usersExpectedChoice.map(Number);
    console.log(numbering);
    Promise.all(
        requestURL.map((uri) => {
            fetch(uri)
                .then((res) => res.json())
                .then((obj) => {
                    const searchPageResultBox = cutequery(
                        ".search-page--result-box"
                    );
                    searchPageResultBox.innerHTML = "";
                    obj.data.list.filter(function (item) {
                        const jud = numbering.find(
                            (e) => e === item["goodsNo"]
                        );
                        return jud
                            ? CreateProductCard(item, searchPageResultBox)
                            : "";
                    });
                });
        })
    );
}

export { drawProductCardVonRequestURL, findProductCardVonUserChoice };
