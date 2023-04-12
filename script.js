var numProducts = 12;



generateProductItems();

//function generates buttons for the themes
function generateProductItems() {
    //for loop creates 6 theme buttons and inserts them into the themeBox div in the html file
    for (let i = 0; i < numProducts; i++) {
        //creating a button element and assigning attribute values
        const individualProduct = document.createElement("div");
        individualProduct.className = "individualProduct";
        const productLinkImg = document.createElement("a");
        productLinkImg.className = "productLink";
        productLinkImg.href = "productPage.html";
        const productImg = document.createElement("img");
        productImg.alt = "Image of product";
        productImg.src = "Images/grey chair category.png";
        productImg.className = "individualProductImg";
        const productLinkTitle = document.createElement("a");
        productLinkTitle.className = "productLink";
        productLinkTitle.href = "productPage.html";
        const productTitle = document.createElement("h5");
        productTitle.innerHTML = "Product Name";
        productTitle.className = "productItemName";
        const productLocation = document.createElement("p");
        productLocation.innerHTML = "Product Location";
        productLocation.className = "productItemLocation";
        const productPriceAndInteract = document.createElement("div");
        productPriceAndInteract.className = "productPriceAndInteract";
        const productPrice = document.createElement("p");
        productPrice.innerHTML = "$20.99";
        productPrice.className = "productItemPrice";
        const addToCart = document.createElement("button");
        addToCart.className = "addToCartButton";
        addToCart.innerHTML = "Add to Cart";



        productLinkImg.appendChild(productImg);
        productLinkTitle.appendChild(productTitle);
        productPriceAndInteract.appendChild(productPrice);
        productPriceAndInteract.appendChild(addToCart);

        individualProduct.appendChild(productLinkImg);
        individualProduct.appendChild(productLinkTitle);
        individualProduct.appendChild(productLocation);
        individualProduct.appendChild(productPriceAndInteract);


        //appending the button to the html 
        const element = document.getElementById("individualProducts");
        element.appendChild(individualProduct);
    }
}

   
      
