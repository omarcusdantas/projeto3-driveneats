let priceMain = 0;
let priceDrink = 0;
let priceDessert = 0;

let nameMain = '';
let nameDrink = '';
let nameDessert = '';

function checkOrder(){
    if (priceMain!=0 && priceDrink!=0 && priceDessert!=0) {
        const button = document.querySelector('.close-order');
        button.removeAttribute('disabled');
        button.classList.add('button-enabled');
        button.innerHTML = 'Fechar pedido';
    }
}

function selectMain(selected){
    const preSelected = document.querySelector('.main.selected');
    if (preSelected !== null) {
        preSelected.classList.remove('selected');
    }
    selected.classList.add('selected');

    let handlePrice = selected.querySelector('h5').innerHTML;
    handlePrice = handlePrice.replace('R$','').replace(',', '.');
    priceMain = parseFloat(handlePrice).toFixed(2);

    nameMain = selected.querySelector('h4').innerHTML;

    checkOrder();
}

function selectDrink(selected){
    const preSelected = document.querySelector('.drink.selected');
    if (preSelected !== null) {
        preSelected.classList.remove('selected');
    }
    selected.classList.add('selected');

    let handlePrice = selected.querySelector('h5').innerHTML;
    handlePrice = handlePrice.replace('R$','').replace(',', '.');
    priceDrink = parseFloat(handlePrice).toFixed(2);

    nameDrink = selected.querySelector('h4').innerHTML;

    checkOrder();
}

function selectDessert(selected){
    const preSelected = document.querySelector('.dessert.selected');
    if (preSelected !== null) {
        preSelected.classList.remove('selected');
    }
    selected.classList.add('selected');

    let handlePrice = selected.querySelector('h5').innerHTML;
    handlePrice = handlePrice.replace('R$','').replace(',', '.');
    priceDessert = parseFloat(handlePrice).toFixed(2);

    nameDessert = selected.querySelector('h4').innerHTML;

    checkOrder();
}

function confirmOrder() {
    const foodMain = document.querySelector('.confirm-main');
    const foodDrink = document.querySelector('.confirm-drink');
    const foodDessert = document.querySelector('.confirm-dessert');
    const foodTotal = document.querySelector('.confirm-total');

    foodMain.querySelector('h3').innerHTML = nameMain;
    foodDrink.querySelector('h3').innerHTML = nameDrink;
    foodDessert.querySelector('h3').innerHTML = nameDessert;

    foodMain.querySelector('p').innerHTML = priceMain.replace('.', ',');
    foodDrink.querySelector('p').innerHTML = priceDrink.replace('.', ',');
    foodDessert.querySelector('p').innerHTML = priceDessert.replace('.', ',');

    let total = parseFloat(priceMain) + parseFloat(priceDrink) + parseFloat(priceDessert);
    total = total.toFixed(2).replace('.', ',');
    foodTotal.querySelector('p').innerHTML = `R$ ${total}`;

    const confirmBox = document.querySelector('.confirm-order');
    console.log(confirmBox);
    confirmBox.classList.remove('hidden');
}

function cancelOrder() {
    const confirmBox = document.querySelector('.confirm-order');
    console.log(confirmBox);
    confirmBox.classList.add('hidden');
}

function checkOut() {
    const name = prompt('Nome');
    const address = prompt('Endereço');

    let total = parseFloat(priceMain) + parseFloat(priceDrink) + parseFloat(priceDessert);
    total = total.toFixed(2).replace('.', ',');

    const message = 
        `Olá, gostaria de fazer o pedido:%0A` +
        `- Prato: ${nameMain}%0A` +
        `- Bebida: ${nameDrink}%0A` +
        `- Sobremesa: ${nameDessert}%0A` +
        `Total: R$ ${total}%0A%0A` +
        `Nome: ${name}%0A` +
        `Endereço: ${address}`;
    window.open(`https://wa.me/+5561999999999?text=${message}`);
}