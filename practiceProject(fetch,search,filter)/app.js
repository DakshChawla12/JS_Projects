const url = "https://fakestoreapi.com/products";

const mainFunctionCall = async () => {
    const productContainerEl = document.querySelector('#container');
    const search_input = document.querySelector('#search_input');

    // Making an API GET request to fetch the data of all products
    const fetchProducts = async () => {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            return error;
        }
    }; // api will return array of objects of all products

    // Fetch the products from the API and store into products variable
    const products = await fetchProducts();

    // Generate HTML structure for each product
    const generateProducts = (product) => {
        return `<div class="product_card">
            <div class="image_container">
                <img src="${product.image}" alt="">
            </div>
            <div class="content">
                <h2>${product.title}</h2>
                <p>${product.description.split(" ").slice(0, 20).join(" ")}</p>
                <button>${product.price}$</button>
            </div>
        </div>`;
    };

    // Render the products to the container element
    const renderProducts = (products) => {
        productContainerEl.innerHTML = "";
        products.forEach(product => {
            productContainerEl.innerHTML += generateProducts(product); // adding a new product from products into the main container
        });
    };

    // Filter products based on search input
    const filterHandler = (event) => {
        const searchText = event.target.value.toLowerCase();

        const filteredProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(searchText) 
                || product.description.toLowerCase().includes(searchText)
                || product.price.toString().toLowerCase().includes(searchText);
        });

        renderProducts(filteredProducts); // re-rendering all the products matching the search input
    };

    // Add event listener to the search input to handle filtering
    search_input.addEventListener('keyup', filterHandler);

    // Initially render all products
    renderProducts(products);
};

// Call the main function to execute the script
mainFunctionCall();
