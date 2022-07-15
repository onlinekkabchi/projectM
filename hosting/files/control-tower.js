import init from "./base-init.js";
import { drawProductCardVonRequestURL } from "./product-card-draw.js";
import {
    showSearchPage,
    hideSearchPage,
    showOnlySaleProduct,
    hideOnlySaleProduct,
    showMusinsaOnlyProduct,
    showAllProductIncludeNotMusinsaOnly,
} from "./base-header-menu.js";

export default function ControlTower() {
    this.controlSwitches = {
        searchOnOffSwitch: false,
        saleProductSwitch: true,
        musinsaOnlyProductSwitch: false,
        includeSoldOutProductSwitch: false,
        infiniteStone: true,
    };
}

ControlTower.prototype.init = init();
ControlTower.prototype.getDataForProducts = drawProductCardVonRequestURL();
ControlTower.prototype.searchOnOff = function () {
    if (this.controlSwitches.searchOnOffSwitch === false) {
        showSearchPage();
        return (this.controlSwitches.searchOnOffSwitch = true);
    } else if (this.controlSwitches.searchOnOffSwitch === true) {
        hideSearchPage();
        return (this.controlSwitches.searchOnOffSwitch = false);
    } else {
        console.error();
    }
};
ControlTower.prototype.saleProductOnOff = function () {
    if (this.controlSwitches.saleProductSwitch === false) {
        showOnlySaleProduct();
        return (this.controlSwitches.saleProductSwitch = true);
    } else if (this.controlSwitches.saleProductSwitch === true) {
        hideOnlySaleProduct();
        return (this.controlSwitches.saleProductSwitch = false);
    } else {
        console.error();
    }
};
ControlTower.prototype.musinsaOnlyProductOnOff = function () {
    if (this.controlSwitches.musinsaOnlyProductSwitch === false) {
        showMusinsaOnlyProduct();
        return (this.controlSwitches.musinsaOnlyProductSwitch = true);
    } else if (this.controlSwitches.musinsaOnlyProductSwitch === true) {
        showAllProductIncludeNotMusinsaOnly();
        return (this.controlSwitches.musinsaOnlyProductSwitch = false);
    } else {
        console.error();
    }
};
