// fetch("https://fakestoreapi.com/products")   //fecthing of api
//   .then((res) => res.json())    //converting to json
//   .then((data) => console.log(data))  //using thee data
//   .catch((error) => console.error(error));  //correcting logging error


 // asynchrounously function
 const container = document.getElementById("container")

 const getProducts = async () => {
  try {
    const res= await fetch("https://dummyjson.com/products")
    if (!res)  
      throw new error("HTTP error! status");
    
    const data= await res.json()
    console.log(data) 
    cheapProduct = data.products.filter((x) => x.price <10)
    cheapProduct.forEach((product) => {
      const productEl = document.createElement("div")
      productEl.classList.add("product-card")
      productEl.innerHTML = ` <img src="${product.thumbnail}" alt="product-images " />
      
        <h3>${product.title}</h3>
        <p>${product.description}</p>
         <strong> $${product.price}</strong>
         <h4>${product.category}</h4>
          <button>Add to Cart</button>
      `;
    
      container.appendChild(productEl);
    });
  }catch (error) {
    console.error(error);
  }

}

  getProducts()