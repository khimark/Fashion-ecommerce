const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('search-bar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return (
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='pro-container'>
            <div class='pro'>
            <img class='images' src=${image}></img>
            </div>
            <div class='des'>
            <p>${title}</p>
            <h4>${price}</h4>
            </div>
            <div class='fal fa-shopping-cart cart'>
            </div>
            </div> `
        )
    }).join('')
};
displayItem(categories);