const product= [
    {
        id: 0,
        image: 'image/products/f1.jpeg',
        title: 'Coloured T-shirt',
        price: 'Ksh 2500',
    },
    {
        id: 1,
        image: 'image/products/f2.jpeg',
        title: 'Coloured T-shirt',
        price: 'Ksh 1500',
    },
    {
        id: 2,
        image: 'image/products/f3.jpeg',
        title: 'Coloured T-shirt',
        price: 'Ksh 3500',
    },
    {
        id: 4,
        image: 'image/products/f4.jpeg',
        title: 'Beach T-shirt',
        price: 'Ksh 2500',
    },
    {
        id: 5,
        image: 'image/products/f5.jpeg',
        title: 'Spade T-shirt',
        price: 'Ksh 2500',
    },
    {
        id: 6,
        image: 'image/products/f6.jpeg',
        title: 'Ankara Shirt',
        price: 'Ksh 3500',
    },
    {
        id: 7,
        image: 'image/products/f7.jpeg',
        title: 'Animal Themed T-shirt',
        price: 'Ksh 2500',
    },
    {
        id: 8,
        image: 'image/products/f8.jpeg',
        title: 'Coloured T-shirt',
        price: 'Ksh 1500',
    },
    {
        id: 9,
        image: 'image/products/n1.jpeg',
        title: 'Beach Shirt',
        price: 'Ksh 2500',
    },
    {
        id: 10,
        image: 'image/products/n2.jpeg',
        title: 'Floral Shirt',
        price: 'Ksh 1500',
    },
    {
        id: 11,
        image: 'image/products/n3.jpeg',
        title: 'Sport-Shoe',
        price: 'Ksh 2500',
    },
    {
        id: 12,
        image: 'image/products/n4.jpeg',
        title: 'Ankara T-shirt',
        price: 'Ksh 3500',
    },
    {
        id: 13,
        image: 'image/products/n5.jpeg',
        title: 'Leather Shoulder Bag',
        price: 'Ksh 2500',
    },
    {
        id: 14,
        image: 'image/products/n6.jpeg',
        title: 'Coloured T-shirt',
        price: 'Ksh 1500',
    },
    {
        id: 15,
        image: 'image/products/n7.jpeg',
        title: 'Leather Briefcase',
        price: 'Ksh 2500',
    },
    {
        id: 16,
        image: 'image/products/n8.jpeg',
        title: 'Sport Wear',
        price: 'Ksh 2500',
    }
];
const categories= [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var {image,title,price}=item;
    return(
        `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j=0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty";
        document.getElementById("total").innerHTML ="$ "+0+".00";
    }
    else {
        document.getElementById("cartItem").innerHTML= cart.map((items)=>
        {
            var{image,title,price} =items;
            total=total+price;
            document.getElementById("total").innerHTML= "$ "+total+".00"; 
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}