let customerNumber = 1;
const mainCourses = [
    {
        Meal: "HOMESTYLE PEBERSAUCE",
        price: 77
    },
    {
        Meal: "DOUBLE CHEESEBURGER",
        price: 30
    },
    {
        Meal: "BIG MAC MENU",
        price: 103
    },
    {
        Meal: "2 x DIJON CHICKEN CHEESE MENU",
        price: 96
    },
    {
        Meal: "MIXED TEAMBOX MENU",
        price: 124
    }
];
const drinks = [{
    drink: "COCA-COLA",
    price: 32
}, {
    drink: "FUZE TEA FERSKEN",
    price: 32
}, {
    drink: "MILKSHAKE M. JORDBÆRSMAG",
    price: 35
}, {
    drink: "MILKSHAKE M. CHOKOLADESMAG",
    price: 35
}, {
    drink: "SHAKESPRESSO",
    price: 42
}
]
const desserts = [{
    desert: "SUNDAE MED KARAMEL",
    price: 26
}, {
    desert: "MCFLURRY KARAMEL & POPCORNSMAG",
    price: 35
}, {
    desert: "OREO MUFFIN",
    price: 20
}, {
    desert: "CHOKOLADE DONUT",
    price: 13
},
]
const accessories = [{
    accessory: "POMMES FRITES",
    price: 31
}, {
    accessory: "BARBEQUE",
    price: 8
}, {
    accessory: "SPICY CHICKEN MCNUGGETS 6 stk.",
    price: 47
}, {
    accessory: "CHILI CHEESE TOPS TEAM BOX",
    price: 69
},
]
let orderList;

function updateCustomerNumber() {
    document.getElementById('customerNumber').innerHTML = '';
    let customerElement = document.createElement('h3');
    customerElement.innerText = customerNumber;
    let customerLocation = document.getElementById('customerNumber');
    customerLocation.appendChild(customerElement);
}

function renderMenu() {
    mainCourses.forEach(function (course) {
        let option = document.createElement('div');
        let elementLocation = document.getElementById('maincourse');

        let optionName = document.createElement('h4');
        optionName.innerText = course.Meal;
        option.setAttribute('class','itemName')

        let optionPrice = document.createElement('div');
        optionPrice.innerText = "Pris: " + course.price;

        option.append(optionName, optionPrice);

        elementLocation.appendChild(option);
    })

    drinks.forEach(function (drink) {
        let option = document.createElement('div');
        let elementLocation = document.getElementById('drink');

        let optionName = document.createElement('h4');
        optionName.innerText = drink.drink;

        let optionPrice = document.createElement('div');
        optionPrice.innerText = "Pris: " + drink.price;

        option.append(optionName, optionPrice);

        elementLocation.appendChild(option);
    })
};

renderMenu();

function RenderOrderlist() {
    if (true) {


    }
}