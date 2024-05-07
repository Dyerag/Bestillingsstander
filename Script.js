let customerNumber = 0; /*starts at zero, because the function that writes it on the page, begins by increasing it by 1.*/

/*The menu items has been hardcoded into the script, because i couldn't get the script to read a json file.*/
/*All of the object variables have the same name, so that they can all be run through the rendermMenu function*/
/*All the objects have a section variable, so that the renderMenu function knows
where to put them on the page once they're made into elements */
const mainCourses = [
    {
        name: "HOMESTYLE PEBERSAUCE",
        price: 77,
        section: "maincourse",
        id: 1
    },
    {
        name: "DOUBLE CHEESEBURGER",
        price: 30,
        section: "maincourse",
        id: 2
    },
    {
        name: "BIG MAC MENU",
        price: 103,
        section: "maincourse",
        id: 3
    },
    {
        name: "2 x DIJON CHICKEN CHEESE MENU",
        price: 96,
        section: "maincourse",
        id: 4
    },
    {
        name: "MIXED TEAMBOX MENU",
        price: 124,
        section: "maincourse",
        id: 5
    }
];
const drinks = [{
    name: "COCA-COLA",
    price: 32,
    section: "drink",
    id: 6
}, {
    name: "FUZE TEA FERSKEN",
    price: 32,
    section: "drink",
    id: 7
}, {
    name: "MILKSHAKE M. JORDBÆRSMAG",
    price: 35,
    section: "drink",
    id: 8
}, {
    name: "MILKSHAKE M. CHOKOLADESMAG",
    price: 35,
    section: "drink",
    id: 9
}, {
    name: "SHAKESPRESSO",
    price: 42,
    section: "drink",
    id: 10
}
];
const desserts = [{
    name: "SUNDAE MED KARAMEL",
    price: 26,
    section: "desert",
    id: 11
}, {
    name: "MCFLURRY KARAMEL & POPCORNSMAG",
    price: 35,
    section: "desert",
    id: 12
}, {
    name: "OREO MUFFIN",
    price: 20,
    section: "desert",
    id: 13
}, {
    name: "CHOKOLADE DONUT",
    price: 13,
    section: "desert",
    id: 14
},
];
const accessories = [{
    name: "POMMES FRITES",
    price: 31,
    section: "addition",
    id: 15
}, {
    name: "BARBEQUE",
    price: 8,
    section: "addition",
    id: 16
}, {
    name: "SPICY CHICKEN MCNUGGETS 6 stk.",
    price: 47,
    section: "addition",
    id: 17
}, {
    name: "CHILI CHEESE TOPS TEAM BOX",
    price: 69,
    section: "addition",
    id: 18
},
];
/*List of items picke by the user*/
let orderList = [];

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

        let optionName = document.createElement('h5');
        optionName.innerText = item.name;
        optionName.setAttribute('class', 'itemName');

        let optionPrice = document.createElement('div');
        optionPrice.innerText = "Pris: " + item.price;
        /*The Price also gets a class, just in case i need to change the styling of it later */
        optionPrice.setAttribute('class', 'itemPrice');

        option.append(optionName, optionPrice);
        option.onclick = addToOrderList;
        option.id = item.id

        elementLocation.appendChild(option);
    });
};

function addToOrderList(event) {
    console.log(event);

    renderOrderlist();
}

function renderOrderlist() {
    // document.getElementById('cartItems').innerText = "";
    let cart = document.getElementById('cartItems');
    cart.innerHTML = '';

    let content = document.createElement('div');

    if (orderList.length == 0) {
        /*Make it write that there is nothing in the cart when the cart is empty*/
        content.innerText = 'Der er ikke lagt noget i kurven';
        content.setAttribute('id', 'empty');

        cart.appendChild(content);
    }
    else {
        /* Render the contents of the cart on the cart section of the page*/
        orderList.forEach(function (item) {
            const remove = document.createElement('button');

            remove.setAttribute('class', "remove");
            remove.innerText = '-';
            remove.onclick = removeFromCart;

            item.appendChild(remove);
        });
    };
}

function removeFromCart() {

    renderOrderlist();
}

renderOrderlist();
updateCustomerNumber();

renderMenu(mainCourses);
renderMenu(drinks);
renderMenu(desserts);
renderMenu(accessories);
