let customerNumber = 0; /*starts at zero, because the function that writes it on the page, begins by increasing it by 1.*/
/*The menu items has been hardcoded into the script, because i couldn't get the script to read a json file.*/
/*All of the object variables have the same name, so that they can all be run through the rendermMenu function*/
/*All the objects have a section variable, so that the renderMenu function knows
where to put them on the page once they're made into elements */
const MenuItems = [
    {
        name: "HOMESTYLE PEBERSAUCE",
        price: 77.00,
        section: "maincourse",
        id: 1
    },
    {
        name: "DOUBLE CHEESEBURGER",
        price: 30.00,
        section: "maincourse",
        id: 2
    },
    {
        name: "BIG MAC MENU",
        price: 103.00,
        section: "maincourse",
        id: 3
    },
    {
        name: "2 x DIJON CHICKEN CHEESE MENU",
        price: 96.00,
        section: "maincourse",
        id: 4
    },
    {
        name: "MIXED TEAMBOX MENU",
        price: 124.00,
        section: "maincourse",
        id: 5
    }, {
        name: "COCA-COLA",
        price: 32.00,
        section: "drink",
        id: 6
    }, {
        name: "FUZE TEA FERSKEN",
        price: 32.00,
        section: "drink",
        id: 7
    }, {
        name: "MILKSHAKE M. JORDBÆRSMAG",
        price: 35.00,
        section: "drink",
        id: 8
    }, {
        name: "MILKSHAKE M. CHOKOLADESMAG",
        price: 35.00,
        section: "drink",
        id: 9
    }, {
        name: "SHAKESPRESSO",
        price: 42.00,
        section: "drink",
        id: 10
    }, {
        name: "SUNDAE MED KARAMEL",
        price: 26.00,
        section: "desert",
        id: 11
    }, {
        name: "MCFLURRY KARAMEL & POPCORNSMAG",
        price: 35.00,
        section: "desert",
        id: 12
    }, {
        name: "OREO MUFFIN",
        price: 20.00,
        section: "desert",
        id: 13
    }, {
        name: "CHOKOLADE DONUT",
        price: 13.00,
        section: "desert",
        id: 14
    }, {
        name: "POMMES FRITES",
        price: 31.00,
        section: "addition",
        id: 15
    }, {
        name: "BARBEQUE",
        price: 8.00,
        section: "addition",
        id: 16
    }, {
        name: "SPICY CHICKEN MCNUGGETS 6 stk.",
        price: 47.00,
        section: "addition",
        id: 17
    }, {
        name: "CHILI CHEESE TOPS TEAM BOX",
        price: 69.00,
        section: "addition",
        id: 18
    },
];
/*List of items picke by the user*/
let orderList = [];
let lastOrders;

/*Writes the customer number at the top of the page after incremanting it by 1*/
function updateCustomerNumber() {
    customerNumber++;
    /*This code Clears the customernumber, so that the new one can be written*/
    document.getElementById('customerNumber').innerHTML = '';
    let customerElement = document.createElement('h3');
    customerElement.innerText = customerNumber;
    let customerLocation = document.getElementById('customerNumber');
    customerLocation.appendChild(customerElement);
}

function renderMenu(menuList) {
    menuList.forEach(function (item) {
        /*The items are made a button element, because button already has all the needed funtions*/
        let option = document.createElement('button');
        let elementLocation = document.getElementById(item.section);
        /*Gives the menu item the class called item*/
        option.setAttribute('class', 'item');

        //The name of the food item is being put in an element for stylisation purposes
        let optionName = document.createElement('h5');
        optionName.innerText = item.name;
        optionName.setAttribute('class', 'itemName');

        //The price is in an element to be styled on
        let optionPrice = document.createElement('div');
        //toFixed shows the decimals
        optionPrice.innerText = item.price.toFixed(2) + ' Kr.';
        /*The Price also gets a class, just in case i need to change the styling of it later */
        optionPrice.setAttribute('class', 'itemPrice');

        /*The option button is given the id belonging to the food item it's tied to */
        //The name and price are given the id aswell, because clicking them gives their data instead of the buttons 
        option.id = item.id;
        optionName.id = item.id;
        optionPrice.id = item.id;

        option.appendChild(optionName)
        option.appendChild(optionPrice);
        option.onclick = addToOrderList;

        elementLocation.appendChild(option);
    });
};

function addToOrderList(event) {
    const button = event.target;
    const itemId = button.id;

    const addToCart = MenuItems.find(function (item) {
        //number converts its arguments into number values. It's use here, because the id gotten from the butten is a string
        if (item.id == itemId) {
            return true
        }
        else {
            return false
        }
    });

    orderList.push(addToCart);
    renderOrderlist();
}

function renderOrderlist() {
    document.getElementById('cartItems').innerText = "";
    let destination = document.getElementById('cartItems');

    if (orderList.length === 0) {
        /*Make it write that there is nothing in the cart when the cart is empty*/
        let content = document.createElement('div');
        content.innerText = 'Der er ikke lagt noget i kurven';
        content.setAttribute('id', 'empty');

        destination.appendChild(content);
    }
    else {
        /* Render the contents of the cart on the cart section of the page*/
        orderList.forEach(function (item) {
            //The item thats added to the cart
            //need to give it an id for the delete button
            let render = document.createElement('div');
            render.setAttribute('class', 'cartItem');
            // render.setAttribute('id', 'addedToCart');

            let name = document.createElement('h5');
            name.innerText = item.name;
            name.setAttribute('class', 'itemName');

            let price = document.createElement('div');
            price.innerText = item.price.toFixed(2) + ' Kr.';

            //The butten to delete it from the cart
            const remove = document.createElement('button');
            remove.setAttribute('class', "remove");
            remove.id = item.id
            remove.innerText = '-';
            remove.onclick = removeFromCart;

            render.appendChild(name);
            render.appendChild(price);
            render.append(remove);

            destination.appendChild(render);
        });
        calculatePrice();
    };
}

function calculatePrice() {
    let temp = 0;
    orderList.forEach((item) => {
        temp += item.price;
    });
    ordercost = temp;
}

function removeFromCart(event) {
    const button = event.target;
    const id = button.id;

    orderList = orderList.filter((item) => item.id != id)

    renderOrderlist();
}

function cashOut() {
    let ordercost = calculatePrice();
    const completedOrder = {
        customerNumber: customerNumber,
        cart: orderList,
        cost: this.ordercost.toFixed(2)
    }
    alert(`Kundenummer: ${completedOrder.customerNumber}\nAntal i Kurv: ${completedOrder.cart.length}\nTotal Pris: ${this.ordercost.toFixed(2)} kr.`)
}

renderOrderlist();
updateCustomerNumber();

renderMenu(MenuItems);

