import { requestURL } from "./url.js";
import { cutequery } from "./make-cutie-query.js";
import { findProductCardVonUserChoice } from "./product-card-draw.js";

function Dictionary() {
    this.vocaForProduct = {};

    const arrangeVoca = (txt) => {
        txt.data.list.map((el) => {
            const goodsNr = el["goodsNo"];
            this.vocaForProduct[goodsNr] = [el["goodsName"], el["brandName"]];
        });
    };

    Promise.all(
        requestURL.map((uri) => {
            fetch(uri)
                .then((res) => res.json())
                .then((result) => arrangeVoca(result));
        })
    );
}

function findWord(users, dicts) {
    let rez = dicts.filter((item) =>
        users.some((str) => item.toUpperCase().includes(str))
    );
    return rez.length;
}

function writeSearchResultInNewBook(list, targetBox) {
    const searchResultList = cutequery(targetBox);
    searchResultList.innerHTML = `<div class="search-page--result-box"></div>`;

    const listBoxTemplate = (el) => {
        const card = document.createElement("div");
        card.className = "search-result-card";
        card.innerHTML += `<p>${el}</p>`;
        return card;
    };
    return list.map((product) => {
        searchResultList.appendChild(listBoxTemplate(product));
    });
}

function findProductInNewBook(infos) {
    const userInput = cutequery(".search-page--bar--search-input");
    userInput.addEventListener("keyup", (e) => {
        console.log(userInput.value);
        if (userInput.value.length < 1) {
            return;
        }
        const valArr = [e.target.value.toUpperCase()];
        let usersExpectedChoice = [];

        for (const key in infos) {
            findWord(valArr, infos[key]) > 0
                ? usersExpectedChoice.push(key)
                : "";
        }
        return findProductCardVonUserChoice(usersExpectedChoice);
    });
}

export { findProductInNewBook, Dictionary };
