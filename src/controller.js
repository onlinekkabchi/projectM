import init from "./components/init.js";
import { getDataForProducts } from "./components/products.js";
import { showSearchPage, hideSearchPage } from "./components/header-menu.js";

export default function ControlTower() {
    this.controlSwitches = {
        tester: false,
    };
}

ControlTower.prototype.init = init();
ControlTower.prototype.getDataForProducts = getDataForProducts();
ControlTower.prototype.searchOnOff = function () {
    if (this.controlSwitches.tester === false) {
        showSearchPage();
        return (this.controlSwitches.tester = true);
    } else if (this.controlSwitches.tester === true) {
        hideSearchPage();
        return (this.controlSwitches.tester = false);
    } else {
        console.error();
    }
};

console.log("ii");
