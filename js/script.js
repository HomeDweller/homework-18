//Minimum
//task 1
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту,
//  кількість і куплений він чи ні, ціну за одиницю товару, сума. 
//  Написати кілька функцій для роботи з таким масивом:
let shoppingList = [
    bread = {
        name: 'Bread',
        type: 'bran',
        amount: 2,
        pricePer1: 30,
        priceTotal: 60,
        bought: true
    },
    bananas = {
        name: 'Bananas',
        type: 'fresh',
        amount: 5,
        pricePer1: 10,
        priceTotal: 50,
        bought: false
    },
    milk = {
        name: 'Milk',
        type: 'pasteurized ',
        amount: 2,
        pricePer1: 20,
        priceTotal: 40,
        bought: true
    },
    chocolate = {
        name: 'Chocolate',
        type: 'dark',
        amount: 3,
        pricePer1: 35,
        priceTotal: 105,
        bought: true
    },
    eggs = {
        id: 5,
        name: 'Eggs',
        type: 'chicken',
        amount: 20,
        pricePer1: 7,
        priceTotal: 140,
        bought: false
    }
];

// task 1.1
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
function showList(array) {
    let notBought = 'Not bought:';
    let bought = 'Bought:';
    array.forEach(function (obj) {
        if (obj.bought === false) {
            notBought += `\n- ${obj.name}`;
        }
        else {
            bought += `\n- ${obj.name}`;
        };
    });
    console.log(notBought);
    console.log(bought);
};

showList(shoppingList);

// task1.2
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function checkPurchase(array) {
    let item = prompt('What have you bought?')
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.toLowerCase() === item.toLowerCase()) {
            if (array[i].bought === false) {
                array[i].bought = true;
                return 'Marked as bought';
            } else {
                return 'Item already bought';
            }
        }
    };
    return 'No such item in your buying list';
};

alert(checkPurchase(shoppingList));
console.log(shoppingList)

//normal
// task 1
// Видалення продукту зі списку (видалення повинно проводитися шляхом 
//створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
function deleteProduct(array) {
    let itemName = prompt("Don't feel like buying something?");
    let num;
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.toLowerCase() === itemName.toLowerCase()) {
            num = i;
            break;
        }
    };
    if (!isNaN(num)) {
        let newList = array.slice();
        newList.splice(num, 1);
        return newList;
    } else {
        return "There's no such product in your shopping list";
    }
};
console.log(deleteProduct(shoppingList));

//task 2
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
// необхідно збільшувати кількість в існуючій покупці, а не додавати нову.
//  При цьому також повинна змінитися сума, наприклад, 
//  якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
function buyMore(array) {
    let itemName = prompt('What item to add?', '');
    let ammount = +prompt('How many to add?', '');
    if (isNaN(ammount)) return 'It has to be a number';
    if (ammount <= 0) return 'You need to add at lest some number of items';
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.toLowerCase() === itemName.toLowerCase()) {
            array[i].quantity += ammount;
            array[i].priceTotal = array[i].quantity * array[i].pricePer1
            return array;
        }
    };
    let price = +prompt('How much does one of them costs?', '');
    if (isNaN(price) || price <= 0) return 'Check the price';
    let obj = itemName.toLowerCase();
    array.push(
        obj = {
            name: itemName,
            quantity: ammount,
            bought: false,
            pricePer1: price,
            priceTotal: ammount * price
        }
    );
    return array;
};

console.log(buyMore(shoppingList));

// maximum
// task 1
// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
function countPrices(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].priceTotal;
    }
    return sum;
}
console.log(`Total price of all products will be: ${countPrices(shoppingList)}`)

// task2
// Підрахунок суми всіх (не) придбаних продуктів.
function potentialPurchase(array) {
    let potentialSum = 0;
    array.forEach(e => {
        if (e.bought == false) {
            potentialPurchase += e.priceTotal;
        }
    })
    return potentialPurchase;
}
console.log(`Total price of unbought products will be: ${potentialPurchase(shoppingList)}`)