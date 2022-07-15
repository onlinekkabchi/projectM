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
                    obj.data.list.forEach((el) =>
                        window.localStorage.setItem(
                            el["goodsNo"],
                            JSON.stringify(el)
                        )
                    );
                });
        })
    );
    return;
}

function findProductCardVonUserChoice(usersExpectedChoice) {
    // let numbering = usersExpectedChoice.map(Number);

    // Promise.all(
    //     requestURL.map((uri) => {
    //         fetch(uri)
    //             .then((res) => res.json())
    //             .then((obj) => {
    //                 const searchPageResultBox = cutequery(
    //                     ".search-page--result-box"
    //                 );
    //                 searchPageResultBox.innerHTML = "";

    //                 obj.data.list.filter(function (item) {
    //                     const jud = numbering.find(
    //                         (e) => e === item["goodsNo"]
    //                     );
    //                     return jud
    //                         ? CreateProductCard(item, searchPageResultBox)
    //                         : "";
    //                 });
    //             });
    //     })
    // );

    const searchPageResultBox = cutequery(".search-page--result-box");
    searchPageResultBox.innerHTML = "";
    const usersChoiceList = usersExpectedChoice
        .map((e) => window.localStorage.getItem(e))
        .forEach((el) =>
            CreateProductCard(JSON.parse(el), searchPageResultBox)
        );
    return;
}

export { drawProductCardVonRequestURL, findProductCardVonUserChoice };
