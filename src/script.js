function selectMain(selected){
    const preSelected = document.querySelector('.main.selected');
    if (preSelected !== null) {
        preSelected.classList.remove('selected');
    }
    selected.classList.add('selected');
}

function selectDrink(selected){
    const preSelected = document.querySelector('.drink.selected');
    if (preSelected !== null) {
        preSelected.classList.remove('selected');
    }
    selected.classList.add('selected');
}

function selectDessert(selected){
    const preSelected = document.querySelector('.dessert.selected');
    if (preSelected !== null) {
        preSelected.classList.remove('selected');
    }
    selected.classList.add('selected');
}