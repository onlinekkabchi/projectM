function CreateProductCard(el, targetBox) {
    const productCard = document.createElement("div");
    productCard.className = "product-box";
    const calculateSalePrice = el.normalPrice * (el.saleRate / 100);

    productCard.innerHTML += `
        <a href=${el.linkUrl} target="_blank">
            <img class="product-box--img" src=${el.imageUrl}>
        </a>    
        <p class="product-box--brand-name">${el.brandName}</p>
        <p class="product-box--goods-name">${el.goodsName}<p>
        <div class="product-box--price-info">
            <p class="product-box--price--normal-price">${el.normalPrice}<p>
            <p class="product-box--price--sale-rate">${el.saleRate}%<p>
        </div>
        <p class="product-box saleprice">${calculateSalePrice}</p>

    `;

    return targetBox.appendChild(productCard);
}

export default CreateProductCard;
