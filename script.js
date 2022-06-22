const listaDellaSpesa = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti',
    'Mortazza',
    'Pizza'
];

const cartElement = document.getElementById('cart');
console.log(cartElement);

let i = 0;

while(i < listaDellaSpesa.length){
    const elementoSpesa = document.createElement('li');
    elementoSpesa.innerText = listaDellaSpesa[i];
    cartElement.append(elementoSpesa);
    i++
}

