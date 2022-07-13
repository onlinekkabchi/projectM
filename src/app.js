import ControlTower from "./controller.js";

let joystick = new ControlTower();

console.log("searchbtn loaded");

const searchBtn = document.querySelector(".btn-search");
const saleProductBtn = document.querySelector(".btn-sale-product");
const onlyProductBtn = document.querySelector(".btn-only-product");
const includeSoldoutBtn = document.querySelector(".btn-include-soldout");

searchBtn.addEventListener("click", () => {
    joystick.searchOnOff();
});
