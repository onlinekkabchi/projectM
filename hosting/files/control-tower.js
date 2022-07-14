import init from "./base-init.js";
import { drawProductCardVonRequestURL } from "./product-card-draw.js";
import { showSearchPage, hideSearchPage } from "./base-header-menu.js";

export default function ControlTower() {
    this.controlSwitches = {
        searchOnOffSwitch: false,
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
