const products=[
    {
        id:1,
        name:"Nike Air Jordan 4",
        price:120.00,
        image:"/assets/mens_footwear_img/nike jordan",
        rating:4.5,
        category:"Sneakers",
        size:[6,7,8,9]
    },
    {
        id:2,
        name:"Adidas Supernove",
        price:98.20,
        image:"/assets/womens_footwear_img/adidas",
        rating:4.3,
        category:"Running Shoes",
        size:[6,7,8,9]
    },
    {
        id:3,
        name:"Puma X-Ray Sneakers",
        price:95.00,
        image:"/assets/mens_footwear_img/puma_X",
        rating:4.9,
        category:"Sneakers",
        size:[6,7,8,9]
    },
    {
        id:4,
        name:"Vegan Biker Boots",
        price:31.95,
        image:"/assets/womens_footwear_img/boots",
        rating:3.8,
        category:"Boots",
        size:[6,7,8,9]
    },
    {
        id:5,
        name:"New Balance 370",
        price:63.00,
        image:"/assets/mens_footwear_img/new_balance_360",
        rating:4.1,
        category:"Sneakers",
        size:[6,7,8,9]
    },
    {
        id:6,
        name:"Puma Palermo",
        price:80.71,
        image:"/assets/mens_footwear_img/puma_paliramo",
        rating:4.6,
        category:"Sneakers",
        size:[6,7,8,9]
    },
    {
        id:7,
        name:"Nike Full Force Low",
        price:111.32,
        image:"/assets/mens_footwear_img/nike_full_force",
        rating:5.0,
        category:"Sneakers",
        size:[6,7,8,9]
    },
    {
        id:8,
        name:"Mayze Leather",
        price:32.22,
        image:"/assets/womens_footwear_img/womens_maze",
        rating:2.9,
        category:"Sneakers",
        size:[6,7,8,9]
    },
    {
        id:9,
        name:"Nike Court Vision Low Shoes",
        price:77.89,
        image:"/assets/mens_footwear_img/nike_cour_low_vision2.webp",
        rating:4.7,
        category:"Sneakers",
        size:[6,7,8,9]
    },

{
        id:10,
        name:"New Balance 574 Core Women's",
        price:103.00,
        image:"/assets/womens_footwear_img/new_balance_530",
        rating:4.3,
        category:"Sneakers",
        size:[6,7,8,9]
    },
    {
        id:11,
        name:"Reebok Running Shoes",
        price:48.50,
        image:"/assets/mens_footwear_img/reebok_image",
        rating:4.1,
        category:"Running Shoes",
        size:[6,7,8,9]
    },
    {
        id:12,
        name:"Strappy Heels",
        price:31.00,
        image:"/assets/womens_footwear_img/JM LOOKS Strappy Heels",
        rating:3.0,
        category:"Heels",
        size:[6,7,8,9]
    },
    {
        id:13,
        name:"Block Heels",
        price:29.54,
        image:"/assets/womens_footwear_img/Roadstar hhels",
        rating:4.6,
        category:"Heels",
        size:[6,7,8,9]
    },
      {
        id:14,
        name:"Puma Speedcat Faded Sneakers",
        price:78.00,
        image:"/assets/mens_footwear_img/Puma Speedcat Faded Sneakers",
        rating:4.5,
        category:"Sneakers",
        size:[6,7,8,9]
    },
      {
        id:15,
        name:"DressBerry Block Heels",
        price:60.9,
        image:"/assets/womens_footwear_img/DressBerry.webp",
        rating:4.8,
        category:"Heels",
        size:[6,7,8,9]
    },
]
const container=document.getElementById("productContainer");
function generateStars(rating){
    let stars="";
    for(let i=0;i<5;i++){
        if(rating>=i){
            stars+=`<i class="fa-solid fa-star"></i>`;
        }else if(rating>=i-0.5){
            stars+=`<i class="fa-solid fa-star-half"></i> `
        }else{
            stars+=`<i class="fa-regular fa-star"></i>`
        }
    }
    return stars;
}
function displayPlroduct(productList){
    container.innerHTML="";
    productList.forEach(product=>{
        container.innerHTML+= `<div class="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div class="card h-100">
                    
                        <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                        <div class="card-body">
                            <h6 class="card-title">${product.name}</h6>
                            <div class="rating mb-2">
                                ${generateStars(product.rating)}
                            </div>
                            <p class="price">$${product.price.toFixed(2)}</p>
                            <button class="btn btn-warning w-100 btn-sm">
                                Add to Cart
                            </button>
                            <button class="btn btn-info w-100 btn-sm mt-2">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>`;
    });
}
displayPlroduct(products);
const containers = document.getElementById("productContainer");
const productCount = document.getElementById("productCount");

function updateProductCount() {
    const count = containers.children.length;
    productCount.textContent = count + " Products Found";
}
updateProductCount();

const search=document.getElementById("search-product");

function searchProduct(name){
    let product = products.filter(p => 
        p.name.toLowerCase().includes(name.toLowerCase())
    );
    return product;
}


search.addEventListener("input", function () {
    let value = this.value;

    let result = searchProduct(value);

displayPlroduct(result);
updateProductCount();
});

const categoryProduct=document.querySelectorAll('.category-filter');

categoryProduct.forEach(cp=>{
    cp.addEventListener('change',handleFilter)
});
function handleCategoryFilter() {

    let selectedCategories = [];

    categoryProducts.forEach(cb => {
        if (cb.checked) {
            selectedCategories.push(cb.value);
        }
    });

    let filteredProducts;

    if (selectedCategories.length === 0) {
        filteredProducts = products; // show all
    } else {
        filteredProducts = products.filter(p =>
            selectedCategories.includes(p.category)
        );
    }

    displayPlroduct(filteredProducts);
    updateProductCount();
}