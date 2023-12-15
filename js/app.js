let card = document.querySelector('.card');
let age = Number(prompt('please enter your age !!'));

if (age === 1) {
    card.textContent = 'Your age is ' + age + ' you are a baby bitch ';
} else if (age === 2) {
    card.textContent = 'Your age is ' + age + ' You are baby you bitch';
} else if (age === 3) {
    card.textContent = ' Your age is ' + age + ' You are a baby you pig ';
} else if (age === 4) {
    card.textContent = ' Your age is ' + age + ' You are being a human my man ';
} else if (age === 5) {
    card.textContent = ' Your age is ' + age + ' you are a boy now';
} else if (age >= 6 && age <= 17) {
    card.textContent = ' Your age is ' + age + ' You are a teenager';
} else if (age >= 18) {

    setTimeout(function () {
        card.innerHTML = ' Well done !!!  you are ' + age + ' now you can take car ID ';
    }, 6000);



    if (age >= 18) {

        card.textContent = ' Your age is ' + age + ' you are now a man';
    }
}