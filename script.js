var numProducts = 12;



generateProductItems();

//function generates buttons for the themes
function generateProductItems() {
    //for loop creates 6 theme buttons and inserts them into the themeBox div in the html file
    for (let i = 0; i < numProducts; i++) {
        //creating a button element and assigning attribute values
        const individualProduct = document.createElement("div");
        individualProduct.className = "individualProduct";
        const productImg = document.createElement("img");
        productImg.alt = "Image of product"
        productImg.src = "Images/cart.png"
        const productTitle = document.createElement("h3");
        productTitle.innerHTML = "Product Name";
        productTitle.className = "productItemName";
        const productLocation = document.createElement("p");
        productLocation.innerHTML = "Product Location";
        productLocation.className = "productItemLocation";
        const productPrice = document.createElement("p");
        productPrice.innerHTML = "Product Price";
        productPrice.className = "productItemPrice";


        individualProduct.appendChild(productImg);
        individualProduct.appendChild(productTitle);
        individualProduct.appendChild(productLocation);
        individualProduct.appendChild(productPrice);

        //appending the button to the html 
        const element = document.getElementById("individualProducts");
        element.appendChild(individualProduct);
    }
}