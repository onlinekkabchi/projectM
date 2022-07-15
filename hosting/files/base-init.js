export default function init() {
    const header = document.querySelector("header");
    return (header.innerHTML += `<div class="header-menu">
        <div class="header-menu--logo-box">
            <p class="header-menu--title">MUSINSA</p>
            <p class="header-menu--name">_sonya</p>
        </div>
        <div class="header-menu--box">
            <div class="header-menu--box--btn  btn-search">검색</div>
            <div class="header-menu--box--btn  btn-sale-product">세일상품</div>
            <div class="header-menu--box--btn  btn-only-product">단독상품</div>
            <div class="header-menu--box--btn  btn-include-soldout">품절포함</div>
        </div>
    </div>`);
}
