import init from "./components/init.js";
import { getDataForProducts } from "./components/products-data.js";
import { showSearchPage, hideSearchPage } from "./components/header-menu.js";
import { Dictionary } from "./components/dictionary.js";

export default function ControlTower() {
    this.controlSwitches = {
        searchOnOffSwitch: false,
        infiniteStone: true,
    };
}

ControlTower.prototype.init = init();
ControlTower.prototype.getDataForProducts = getDataForProducts();
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

console.log("ii");
