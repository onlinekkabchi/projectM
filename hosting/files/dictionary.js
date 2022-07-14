import { requestURL } from "./url.js";
import { cutequery } from "./make-cutie-query.js";

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

function findProductInNewBook(infos) {
    const userInput = cutequery(".search-page--bar--search-input");
    userInput.addEventListener("keyup", (e) => {
        const valArr = [e.target.value.toUpperCase()];
        let usersExpectedChoice = [];
        for (const key in infos) {
            findWord(valArr, infos[key]) > 0
                ? usersExpectedChoice.push(key)
                : "";
        }
        console.log(usersExpectedChoice);
        return usersExpectedChoice;
    });
}

export { findWord, findProductInNewBook, Dictionary };
