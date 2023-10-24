const purchase = document.querySelectorAll('.disponivel');
const confirmation = document.querySelector('.confirmation');
const page = document.querySelector('.wrapper');
const closeButton = document.querySelectorAll('.close');

purchase.forEach(function(divElement) {
    divElement.addEventListener('click', function() {
        divElement.addEventListener('click', function() {
            // Blur the entire page
           page.style.filter = 'blur(1px)';

            // Show the hidden div
            confirmation.style.visibility = 'visible';
    });
})});

closeButton.forEach(function(button) {
    button.addEventListener('click', function() {
        button.addEventListener('click', function() {
            page.style.filter = 'blur(0px)';
            confirmation.style.visibility = 'hidden';
        });
    });
});



// favoritos
const favoriteButtons = document.querySelectorAll(".fav_icon");
const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];


favoriteButtons.forEach((favoriteButton) => {
    const elementID = favoriteButton.id;
    if (savedFavorites.includes(elementID)) {
        // If the element is in the savedFavorites array, show the full heart
        favoriteButton.querySelector(".open").style.visibility = "hidden";
        favoriteButton.querySelector(".full").style.visibility = "visible";
    }

    favoriteButton.addEventListener("click", function () {
        if (savedFavorites.includes(elementID)) {
            const index = savedFavorites.indexOf(elementID);
            if (index > -1) {
                savedFavorites.splice(index, 1);
            }
        } else {
            savedFavorites.push(elementID);
        }

        const openHeart = favoriteButton.querySelector(".open");
        const fullHeart = favoriteButton.querySelector(".full");

        if (openHeart.style.visibility === "hidden") {
            openHeart.style.visibility = "visible";
            fullHeart.style.visibility = "hidden";
        } else {
            openHeart.style.visibility = "hidden";
            fullHeart.style.visibility = "visible";
        }

        // Save the updated favorites in localStorage
        localStorage.setItem("favorites", JSON.stringify(savedFavorites));
        console.log(savedFavorites);
    });
});





