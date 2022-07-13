import ControlTower from "./controller.js";
import { Dictionary } from "./components/dictionary.js";
import { getDataForProducts } from "./components/products-data.js";

let joystick = new ControlTower();

console.log("searchbtn loaded");

const main = document.querySelector("main");
const searchBtn = document.querySelector(".btn-search");
const saleProductBtn = document.querySelector(".btn-sale-product");
const onlyProductBtn = document.querySelector(".btn-only-product");
const includeSoldoutBtn = document.querySelector(".btn-include-soldout");

searchBtn.addEventListener("click", () => {
    joystick.searchOnOff();
    if (joystick.controlSwitches.searchOnOffSwitch === true) {
        let newBook = new Dictionary();
    }
});
document.addEventListener("scroll", () => {
    const fullHeight = main.scrollHeight;
    const userPositionHeight = window.scrollY;
    console.log(fullHeight);
    console.log(userPositionHeight);
    if (fullHeight - userPositionHeight < 1100) {
        console.log("scroll");
        getDataForProducts();
    }
});
