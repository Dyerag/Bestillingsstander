let customerNumber = 1;

function updateCustomerNumber() {
    document.getElementById('customerNumber').innerHTML = '';
    let customerElement = document.createElement('h3');
    customerElement.innerText = customerNumber;
    let customerLocation = document.getElementById('customerNumber');
    customerLocation.appendChild(customerElement);
}

updateCustomerNumber();

customerNumber = 7;
updateCustomerNumber();
