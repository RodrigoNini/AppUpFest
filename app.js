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
const favoriteList = [];

const favoriteButtons = document.querySelectorAll(".fav_icon");

favoriteButtons.forEach((favoriteButton) => {

    const openHeart = favoriteButton.querySelector(".open");
    const fullHeart = favoriteButton.querySelector(".full");

    favoriteButton.addEventListener("click", function () {
        if (openHeart.style.visibility === "visible") {
            openHeart.style.visibility = "hidden";
            fullHeart.style.visibility = "visible";
            // Add the ID to the favorite list
            favoriteList.push(favoriteButton.id);
            console.log(favoriteList);
        } else {
            openHeart.style.visibility = "visible";
            fullHeart.style.visibility = "hidden";
            const index = favoriteList.indexOf(favoriteButton.id);
            if (index > -1) {
                favoriteList.splice(index, 1)
                console.log(favoriteList);
            }
        }
    });
});


