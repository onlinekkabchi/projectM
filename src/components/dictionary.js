import { requestURL } from "../url/url.js";

function Dictionary() {
    let vocas = [];
    const arrangeVoca = (txt) => {
        txt.data.list.map((el) => vocas.push(el["goodsName"], el["brandName"]));
        console.log(vocas);
    };
    Promise.all(
        requestURL.map((uri) => {
            fetch(uri)
                .then((res) => res.json())
                .then((result) => arrangeVoca(result));
        })
    );

    const getUserSearchInput = document.querySelector(
        ".search-page--bar--search-input"
    ).value;
}

export { Dictionary };
