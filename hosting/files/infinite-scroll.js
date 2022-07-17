import { drawForInfiniteScroll } from "./product-card-draw.js";
import { cutequery } from "./make-cutie-query.js";

export default function infiniteScroll() {
    const main = document.querySelector("main");
    const fullHeight = main.scrollHeight;
    const userPositionHeight = window.scrollY;
    if (!cutequery(".search-page") && fullHeight - userPositionHeight < 1000) {
        drawForInfiniteScroll();
    }
}
