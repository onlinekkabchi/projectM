import { drawForInfiniteScroll } from "./product-card-draw.js";

export default function infiniteScroll() {
    const main = document.querySelector("main");
    const fullHeight = main.scrollHeight;
    const userPositionHeight = window.scrollY;
    if (fullHeight - userPositionHeight < 1000) {
        drawForInfiniteScroll();
    }
}
