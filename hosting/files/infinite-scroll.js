import { drawForInfiniteScroll } from "./product-card-draw.js";

export default function infiniteScroll() {
    const main = document.querySelector("main");
    const fullHeight = main.scrollHeight;
    const userPositionHeight = window.scrollY;
    console.log("scroll");
    if (fullHeight - userPositionHeight < 1000) {
        console.log("draw");
        drawForInfiniteScroll();
    }
}
