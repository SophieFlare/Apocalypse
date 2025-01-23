const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
console.log(wrapper);

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]
        // change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = choosenProduct.price
    });
});

const products = [
    {
        id: 1,
        title: "AEVRIX",
        price: 199,
        colors: [
            {
                code: "white",
                img: "../Img/dress 1.jpeg",
            },
            {
                code: "blue",
                img: ""
            },
        ],
    }
]
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelector(".color");
const currentProductSizes = document.querySelector(".size");

console.log(products[0].title); // Should print "AEVRIX"
console.log(products[0].colors[0].code); // Should print "white"

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
})
close.addEventListener("click", () => {
    payment.style.display = "none";
})