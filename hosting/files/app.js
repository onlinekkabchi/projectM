import ControlTower from "./control-tower.js";
import { cutequery } from "./make-cutie-query.js";
import { Dictionary } from "./dictionary.js";
import infiniteScroll from "./infinite-scroll.js";

let joystick = new ControlTower();

const main = cutequery("main");
const searchBtn = cutequery(".btn-search");
const saleProductBtn = cutequery(".btn-sale-product");
const musinsaOnlyProductBtn = cutequery(".btn-only-product");
const includeSoldoutBtn = cutequery(".btn-include-soldout");

searchBtn.addEventListener("click", () => {
    joystick.searchOnOff();
    const newBook = new Dictionary(); // 검색바 열림
});
saleProductBtn.addEventListener("click", () => joystick.saleProductOnOff());
musinsaOnlyProductBtn.addEventListener("click", () =>
    joystick.musinsaOnlyProductOnOff()
);
includeSoldoutBtn.addEventListener("click", () => {});
document.addEventListener("scroll", infiniteScroll);
