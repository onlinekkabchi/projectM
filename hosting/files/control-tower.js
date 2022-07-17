import init from "./base-init.js";
import {
    drawProductCardVonRequestURL,
    drawProductCardVonLocalStorage,
} from "./product-card-draw.js";
import {
    showSearchPage,
    hideSearchPage,
    showOnlySaleProduct,
    hideOnlySaleProduct,
    showMusinsaOnlyProduct,
    showAllProductIncludeNotMusinsaOnly,
    showSoldOutProduct,
    hideSoldOutProduct,
} from "./base-header-menu.js";
import { addFilterTag, removeTag } from "./tagging.js";

export default function ControlTower() {
    this.controlSwitches = {
        searchOnOffSwitch: false,
        saleProductSwitch: true,
        musinsaOnlyProductSwitch: false,
        includeSoldOutProductSwitch: false,
        infiniteStone: true,
    };
}

ControlTower.prototype.init = init(); // 첫 화면 구성.
ControlTower.prototype.getDataForProducts = drawProductCardVonRequestURL(); // 최초 데이터를 받음.
ControlTower.prototype.drawFirstCardList = drawProductCardVonLocalStorage(); // localStorage에 저장된 데이터를 카드형태로 화면에 뿌림.
ControlTower.prototype.searchOnOff = function () {
    if (this.controlSwitches.searchOnOffSwitch === false) {
        showSearchPage();
        return (this.controlSwitches.searchOnOffSwitch = true);
    } else if (this.controlSwitches.searchOnOffSwitch === true) {
        hideSearchPage();
        drawProductCardVonLocalStorage();
        return (this.controlSwitches.searchOnOffSwitch = false);
    } else {
        console.error();
    }
};
ControlTower.prototype.saleProductOnOff = function () {
    if (this.controlSwitches.saleProductSwitch === false) {
        showOnlySaleProduct();
        removeTag(".tag-sale-product");
        return (this.controlSwitches.saleProductSwitch = true);
    } else if (this.controlSwitches.saleProductSwitch === true) {
        addFilterTag("세일상품", "tag-sale-product tag");
        hideOnlySaleProduct();
        return (this.controlSwitches.saleProductSwitch = false);
    } else {
        console.error();
    }
};
ControlTower.prototype.musinsaOnlyProductOnOff = function () {
    if (this.controlSwitches.musinsaOnlyProductSwitch === false) {
        showMusinsaOnlyProduct();
        addFilterTag("단독상품", "tag-musinsa-only-product tag");
        return (this.controlSwitches.musinsaOnlyProductSwitch = true);
    } else if (this.controlSwitches.musinsaOnlyProductSwitch === true) {
        removeTag(".tag-musinsa-only-product");
        showAllProductIncludeNotMusinsaOnly();
        return (this.controlSwitches.musinsaOnlyProductSwitch = false);
    } else {
        console.error();
    }
};
ControlTower.prototype.soldOutProductOnOff = function () {
    if (this.controlSwitches.includeSoldOutProductSwitch === false) {
        showSoldOutProduct();
        addFilterTag("품절포함", "tag-include-soldout-product tag");
        return (this.controlSwitches.includeSoldOutProductSwitch = true);
    } else if (this.controlSwitches.includeSoldOutProductSwitch === true) {
        hideSoldOutProduct();
        removeTag(".tag-include-soldout-product");
        return (this.controlSwitches.includeSoldOutProductSwitch = false);
    } else {
        console.error();
    }
};
