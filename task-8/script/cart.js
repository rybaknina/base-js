"use strict";

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor(productId) {
        this.productId = productId;
        this.counter = 1;
    }

    increaseCountProductInCart() {
        this.counter++;
    }
}

let productList = document.querySelectorAll(".product-list .product-item");
let products = [];
let carts = [];
for (let i = 0; i < productList.length; i++) {
    productList[i].id = i;
    let name = productList[i].querySelector(".product-name").innerText;
    let price = +productList[i].querySelector(".product-price").innerText;
    let product = new Product(i, name, price);
    products.push(product);
}
let cartCount = document.querySelector(".cart-count");
let cartProductTotal = document.querySelector(".cart-product-total");
let cart = document.querySelector(".cart-link");
let addButtons = document.querySelectorAll(".product-btn-add");

cart.addEventListener("click", () => document.querySelector(".cart-products").classList.toggle("hidden"));
addButtons.forEach(button => {
    button.addEventListener("click", addToCart);
});

/**
 * Функция рассчитывает сумму товаров в корзине
 */
function setTotalAmountOfProducts() {
    let cartProductTotalValue = document.querySelector(".cart-product-total-all");
    let total = 0;
    for (let j = 0; j < carts.length; j++) {
        total += (products[carts[j].productId].price * carts[j].counter);
    }
    cartProductTotalValue.textContent = total.toFixed(2);
}

/**
 * Функция перересовывает контент и вызывает расчет суммы товаров в корзине
 */
function reDrawContent() {
    carts.forEach(cart => {
        let productInCart = document.querySelector(`.cart-product-count[data-id="${cart.productId}"]`);
        let amountInCart = document.querySelector(`.cart-product-amount[data-id="${cart.productId}"]`);
        let amount = (products[cart.productId].price * cart.counter).toFixed(2);
        if (productInCart) {
            productInCart.textContent = cart.counter;
            amountInCart.textContent = amount;
        } else {
            let productMarkup = getProductMarkup(products[cart.productId], cart, amount);
            cartProductTotal.insertAdjacentHTML("beforebegin", productMarkup);
        }
    });
    setTotalAmountOfProducts();
}

/**
 * Функция
 * добавляет новый или обновляет существующий объект в массиве карзины,
 * увеличивает счетчик иконки,
 * вызывает функию обновления контента
 *
 * @param event событие на кнопке добавления карточки товара
 */
function addToCart(event) {
    cartCount.textContent++;
    let index = event.currentTarget.parentNode.parentNode.id;
    let cart = carts.find(c => c.productId === index);
    if (cart === undefined) {
        carts.push(new Cart(index));
    } else {
        cart.increaseCountProductInCart();
    }
    reDrawContent();
}

/**
 * Добавление новой разметки - строка с товаром
 * @param product выбранны продукт для добавления в корзину
 * @param cart строка корзины с текущим продуктом
 * @param amount итого
 * @returns {string} разметка
 */
function getProductMarkup(product, cart, amount) {
    return `
      <div class="cart-product-name">${product.name}</div>  
      <div class="cart-product-count" data-id="${product.id}">${cart.counter}</div>
      <div class="cart-product-price">${product.price}</div>
      <div class="cart-product-amount" data-id="${product.id}">${amount}</div>
    `;
}