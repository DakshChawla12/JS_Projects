let shop = document.querySelector('#shop');


//  shopItemsData is in data.js 

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = ()=>{

    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id,name,price,desc,img} = x;
        let search = basket.find((x)=>x.id === id) || [];
        return `
            <div class="item" id="product-id-${id}">
            <img width= "220" src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-qty">
                    <h2>${price}$</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-lg minus"  onclick="decrement(${x.id})"></i>
                        <div id="${id}" class="qty">${search.item === undefined?0 : search.item}</div>
                        <i class="bi bi-plus-lg plus" onclick="increment(${x.id})"></i>
                    </div>
                </div>
            </div>
        </div>
        `
    }).join(""));

};

generateShop();


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

    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !== 0);
    localStorage.setItem("data" , JSON.stringify(basket));
};

let update = (id)=>{
    let search = basket.find((x)=> x.id === id);
    document.querySelector(`#${id}`).innerHTML = search.item;
    calculation();
};

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