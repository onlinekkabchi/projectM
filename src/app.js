import ControlTower from "./control-tower.js";
import { cutequery } from "./make-cutie-query.js";
import { Dictionary, findProductInNewBook } from "./dictionary.js";
import infiniteScroll from "./infinite-scroll.js";

let joystick = new ControlTower();

const main = cutequery("main");
const searchBtn = cutequery(".btn-search");
const saleProductBtn = cutequery(".btn-sale-product");
const onlyProductBtn = cutequery(".btn-only-product");
const includeSoldoutBtn = cutequery(".btn-include-soldout");

searchBtn.addEventListener("click", openDictionary);
document.addEventListener("scroll", infiniteScroll);

function openDictionary() {
    joystick.searchOnOff(); // 검색창을 열고 닫는 기능. 검색창이 열려있을 경우 joystick 내의 객체로 된 스위치가 true로 바뀌며 검색기능이 활성화 됨.
    if (joystick.controlSwitches.searchOnOffSwitch === true) {
        const newBook = new Dictionary();
        const newBookForProductInfo = newBook.vocaForProduct;
        findProductInNewBook(newBookForProductInfo);
    }
}
