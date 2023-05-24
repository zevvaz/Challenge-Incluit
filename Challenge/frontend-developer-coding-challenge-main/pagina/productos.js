let products = document.querySelector(".all-products");
let user_information = document.querySelector("header")
let user_points = document.querySelector(".user-information")
let products_category = document.getElementById("product-category")

const options = {
	method: 'GET',
	headers: {
		'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYyMjllN2FmYjMxNDAwMjE2ZmRlOWIiLCJpYXQiOjE2ODQxNTQ4NTV9.oR2sV0Tgw5HLDIH3d0wrHFgeDmLskcs2IFUcXrl_LfE'
	}
};

let user_data = fetch('https://coding-challenge-api.aerolab.co/user/me', options)
                    .then(response => response.json())
                    .then(json => {
                        user_information.innerHTML += `
                        <a href="" class="user-information"><img src="assets/icons/aeropay-1.svg" alt="">
                        ${json.points}<img src="assets/icons/chevron-active.svg" alt=""></a>`
                    });

let product_data = fetch('https://coding-challenge-api.aerolab.co/products', options)
                    .then(response => response.json())
                    .then(json => {
                        // console.log(categories)
                        // first_category = json[0].category
                        json.forEach((product) => {
                            products.innerHTML += `
                                <div class="product">
                                    <img src=${product.img.url} alt=${product.img.hdUrl}>
                                    <p id="product-name">${product.name}</p>
                                    <p id="product-category">${product.category}</p>
                                    <button class="product-points">Redeem for ${product.cost}</button>
                                </div>`
        
                                products_category.innerHTML += 
                                `<option value=${product.category}>${product.category}</option>`
                            
                            
                        })
                    });
