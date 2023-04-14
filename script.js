var numProducts = 12;

generateProductItems();

//function generates individual products for the products page
function generateProductItems() {
    //for loop creates 12 products and inserts them into the products page
    for (let i = 0; i < numProducts; i++) {
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
        productTitle.innerHTML = "Grey Chair";
        productTitle.className = "productItemName";
        const productLocation = document.createElement("p");
        productLocation.innerHTML = "Trainyards";
        productLocation.className = "productItemLocation";
        const productPriceAndInteract = document.createElement("div");
        productPriceAndInteract.className = "productPriceAndInteract";
        const productPrice = document.createElement("p");
        productPrice.innerHTML = "$20.99";
        productPrice.className = "productItemPrice";
        const buttonContainer = document.createElement("a");
        buttonContainer.href = "cart.html";
        const addToCart = document.createElement("button");
        addToCart.className = "addToCartButton";
        addToCart.innerHTML = "Add to Cart";

        //attaching child elements to their parent elements
        buttonContainer.appendChild(addToCart);
        productLinkImg.appendChild(productImg);
        productLinkTitle.appendChild(productTitle);
        productPriceAndInteract.appendChild(productPrice);
        productPriceAndInteract.appendChild(buttonContainer);
        individualProduct.appendChild(productLinkImg);
        individualProduct.appendChild(productLinkTitle);
        individualProduct.appendChild(productLocation);
        individualProduct.appendChild(productPriceAndInteract);


        //appending the individual product to the products page
        const element = document.getElementById("individualProducts");
        element.appendChild(individualProduct);
    }
}

//function will switch out the current image in the product page
function switchImg(smallImg) {
    smallImg = smallImg.src;
    document.getElementById("mainImg").src = smallImg;
}
      
//function will increment the quantity counter
function incrementCounter(idName)
{
    var value = parseInt(document.getElementById(idName).value);
    value = value + 1;
    document.getElementById(idName).value = value;
}

//function will decrement the quantity counter
function decrementCounter(idName)
{
    if(document.getElementById("quantityText").value > 1)
    {
        var value = parseInt(document.getElementById(idName).value);
        value = value - 1;
        document.getElementById(idName).value = value;
    }
}
