let label = document.querySelector('#label');
let shoppingCart = document.querySelector('#shopping-cart');



let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation = ()=>{
    let cartIcon = document.querySelector('#cart-qty');
    let totalArray = basket.map((x)=>{
        return x.item;
    });
    let total = totalArray.reduce((x, y) => {
        return x + y;
    }, 0);
    cartIcon.innerText = total;
};
calculation();


let generateCartItems = ()=>{

    if(basket.length !== 0){
        return shoppingCart.innerHTML = basket.map((x)=>{
            let{id,item} = x;
            let search = shopItemsData.find((y)=>y.id === id) || [];
            return `
                <div class="cart-item">

                    <img width="100" src=${search.img} alt=""/>
                    <div class="details">
                        <div class="title-price-x">
                            <h4 class="title-price">
                                <p>${search.name}</p>
                                <p class="cart-item-price">$ ${search.price}</p>
                            <h4>
                            <i class="bi bi-x" onclick="removeItem(${id})"></i>
                        </div>
                        
                        <div class="buttons">
                            <i class="bi bi-dash-lg minus"  onclick="decrement(${x.id})"></i>
                            <div id="${id}" class="qty">${item}</div>
                            <i class="bi bi-plus-lg plus" onclick="increment(${x.id})"></i>
                        </div>
                        
                        <h3>$ ${item*search.price}</h3>
                    </div>
                </div>
            `
        }).join("");
    }
    else{
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
            <h2>Cart is empty</h2>
            <a href="index.html">
                <button class="HomeBtn">back to home</button>
            </a>
        `
    }

};

generateCartItems();


let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=>{
        return x.id === selectedItem.id;
    });
    
    if(search === undefined){
        basket.push({
            id:selectedItem.id,
            item:1
        });
    }else{
        search.item += 1;
    }

    generateCartItems();
    update(selectedItem.id);
    localStorage.setItem("data" , JSON.stringify(basket));
};

let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=>{
        return x.id === selectedItem.id;
    });
    
    if(search === undefined) return;
    else if(search.item === 0) return;
    else{
        search.item -= 1;
    }
    // console.log(basket)
    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !== 0);
    generateCartItems();
    localStorage.setItem("data" , JSON.stringify(basket));
};

let update = (id)=>{
    let search = basket.find((x)=> x.id === id);
    document.querySelector(`#${id}`).innerHTML = search.item;
    calculation();
};

let removeItem = (id)=>{
    let selectedItem = id;
    basket = basket.filter((x)=>{
        return x.id !== selectedItem.id;
    });
    localStorage.setItem("data" , JSON.stringify(basket));
    generateCartItems();
};

let totalAmount = ()=>{
    if(basket.length !== 0){
        let amnt = basket.map((x)=>{
            let{item,id} = x;
            let search = shopItemsData.find((y)=>y.id === id) || [];
            return item*search.price;
        }).reduce((x,y)=>x+y,0);
        // console.log(amnt);
        label.innerHTML = `<h2>Total Bill: $ ${amnt}`;
    }
    else return;
}

totalAmount();