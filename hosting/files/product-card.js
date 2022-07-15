function CreateProductCard(el, targetBox) {
    const productCard = document.createElement("div");
    productCard.className = `product-card sold-out--${el.isSoldOut}`;
    const calculateSalePrice = el.normalPrice * (el.saleRate / 100);

    productCard.innerHTML += `
        <div class="product-card--goods-info-box">
            <a href=${el.linkUrl} target="_blank">
                <img class="product-card--img" src=${el.imageUrl}>
            </a>
            <a href=${el.brandLinkUrl} target="_blank">
                <p class="product-card--brand-name">${el.brandName}</p>
            </a>
            <p class="product-card--goods-name">${el.goodsName}</p>
        </div>
        <div class="product-card--kauf-box">
            <p class="product-card--kauf-info--only is-exclusive--${el.isExclusive}">단독</p>
            <p class="product-card--kauf-info--soldout is-sold-out--${el.isSoldOut}">품절</p>
        </div>
        <div class="product-card--price-info">
            <p class="product-card--price--normal-price">${el.normalPrice}</p>
            <p class="product-card--price--sale-rate is-sale--${el.isSale}">${el.saleRate}%</p>
        </div>
        <p class="product-card--price-saleprice saleprice--${el.isSale}">${calculateSalePrice}</p>
        

    `;

    return targetBox.appendChild(productCard);
}

export default CreateProductCard;
