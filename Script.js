let customerNumber = 0; /*starts at zero, because the function that writes it on the page, begins by increasing it by 1.*/

/*The menu items has been hardcoded into the script, because i couldn't get the script to read a json file.*/
/*All of the object variables have the same name, so that they can all be run through the rendermMenu function*/
/*All the objects have a section variable, so that the renderMenu function knows
where to put them on the page once they're made into elements */
const mainCourses = [
    {
        name: "HOMESTYLE PEBERSAUCE",
        price: 77,
        section: "maincourse"
    },
    {
        name: "DOUBLE CHEESEBURGER",
        price: 30,
        section: "maincourse"
    },
    {
        name: "BIG MAC MENU",
        price: 103,
        section: "maincourse"
    },
    {
        name: "2 x DIJON CHICKEN CHEESE MENU",
        price: 96,
        section: "maincourse"
    },
    {
        name: "MIXED TEAMBOX MENU",
        price: 124,
        section: "maincourse"
    }
];
const drinks = [{
    name: "COCA-COLA",
    price: 32,
    section: "drink"
}, {
    name: "FUZE TEA FERSKEN",
    price: 32,
    section: "drink"
}, {
    name: "MILKSHAKE M. JORDBÆRSMAG",
    price: 35,
    section: "drink"
}, {
    name: "MILKSHAKE M. CHOKOLADESMAG",
    price: 35,
    section: "drink"
}, {
    name: "SHAKESPRESSO",
    price: 42,
    section: "drink"
}
];
const desserts = [{
    name: "SUNDAE MED KARAMEL",
    price: 26,
    section: "desert"
}, {
    name: "MCFLURRY KARAMEL & POPCORNSMAG",
    price: 35,
    section: "desert"
}, {
    name: "OREO MUFFIN",
    price: 20,
    section: "desert"
}, {
    name: "CHOKOLADE DONUT",
    price: 13,
    section: "desert"
},
];
const accessories = [{
    name: "POMMES FRITES",
    price: 31,
    section: "addition"
}, {
    name: "BARBEQUE",
    price: 8,
    section: "addition"
}, {
    name: "SPICY CHICKEN MCNUGGETS 6 stk.",
    price: 47,
    section: "addition"
}, {
    name: "CHILI CHEESE TOPS TEAM BOX",
    price: 69,
    section: "addition"
},
];
/*List of items picke by the user*/
let orderList=[];

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
    menuList.forEach(function (Item) {
        /*The items are made a button element, because button already has all the needed funtions*/
        let option = document.createElement('button');
        let elementLocation = document.getElementById(Item.section);
        /*Gives the menu item the item class */
        option.setAttribute('class', 'item');

        let optionName = document.createElement('h5');
        optionName.innerText = Item.name;
        optionName.setAttribute('class', 'itemName');

        let optionPrice = document.createElement('div');
        optionPrice.innerText = "Pris: " + Item.price;
        /*The Price also gets a class, just in case i need to change the styling of it later */
        optionPrice.setAttribute('class', 'itemPrice');

        option.append(optionName, optionPrice);

        elementLocation.appendChild(option);
    })
};

updateCustomerNumber();

renderMenu(mainCourses);
renderMenu(drinks);
renderMenu(desserts);
renderMenu(accessories)

function RenderOrderlist() {
    if (orderList.length =0) {
        /* Render the contents of the cart on the cart section of the page*/
    }
    else {
        /*Make it write that there is nothing in the cart when the cart is empty*/

    }
}