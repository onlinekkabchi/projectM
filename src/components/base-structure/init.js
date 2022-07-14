export default function init() {
    const header = document.querySelector("header");
    return (header.innerHTML += `<div class="header-menu">
        <h2 class="header-menu--title">MUSINSA</h2>
        <div class="header-menu--box">
            <button class="header-menu--box--btn btn-search">검색</button>

            <button class="header-menu--box--btn btn-sale-product">세일상품</button>
            
            <button class="header-menu--box--btn btn-only-product">단독상품</button>
            
            <button class="header-menu--box--btn btn-include-soldout">품절포함</button>
        </div>
    </div>`);
}
