// let chairCards = document.querySelectorAll(".chairCard");

// chairCards.forEach(function (chairCard) {
//     let originalPrice = chairCard.querySelector(".price").innerHTML; 
//     chairCard.onmouseenter = function () {
//         let priceElement = chairCard.querySelector(".price"); 
//         priceElement.innerHTML = `
//             <a href="#" class="text-decoration-none gText text-uppercase">ADD TO CART</a> 
//             <a href="#" class="text-decoration-none gText text-uppercase">QUICKVIEW</a>
//         `;
//     };

//     chairCard.onmouseleave = function () {
//         let priceElement = chairCard.querySelector(".price");
//         priceElement.innerHTML = originalPrice; 
//     };
// });


let chairCard = [
    {
        "imgUrl": "./img/chair1.jpg",
        "name": "Herman Arm Chair, Finch Grey Cotton",
        "id": "chair1",
        "category": "chairs",
        "price": 199,
    },

    {
        "imgUrl": "./img/chair2.jpg",
        "name": "Knox Accent Chair, Natal Print",
        "id": "chair2",
        "category": "chairs",
        "price": 399,
    },

    {
        "imgUrl": "./img/chair3.jpg",
        "name": "Osmond Armchair, Ink Blue Velvet",
        "id": "chair3",
        "category": "chairs",
        "price": 280,
    },

    {
        "imgUrl": "./img/chair4.jpg",
        "name": "Lule Dining Chairs, Royal Yellow",
        "id": "chair4",
        "category": "chairs",
        "price": 370,
    },

    {
        "imgUrl": "./img/chair5.jpg",
        "name": "Stanley Accent Chair, Chestnut Brown",
        "id": "chair5",
        "category": "chairs",
        "price": 280,
    },
];
