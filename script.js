
let cart = [];

function addToCart(name) {
    cart.push(name);

    document.getElementById("cart-count").textContent = cart.length;

    alert(name + " добавлен в корзину!");
}

function showCart() {
    if (cart.length === 0) {
        alert("Корзина пока пуста.");
        return;
    }

    let message = "Ваши автомобили в корзине:\n\n";

    cart.forEach((car, index) => {
        message += (index + 1) + ". " + car + "\n";
    });

    message += "\nКоличество автомобилей: " + cart.length;

    alert(message);
}

function searchCars() {
    const searchValue = document
        .getElementById("search")
        .value
        .toLowerCase()
        .trim();

    const cars = document.querySelectorAll(".car");

    cars.forEach(car => {
        const name = car.dataset.name.toLowerCase();

        car.style.display = name.includes(searchValue)
            ? ""
            : "none";
    });
}
