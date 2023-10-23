const purchase = document.querySelectorAll('.bilhete');
const confirmation = document.querySelector('.confirmation');
const page = document.querySelector('.wrapper');
const closeButton = document.getElementById('close');

purchase.forEach(function(divElement) {
    divElement.addEventListener('click', function() {
        divElement.addEventListener('click', function() {
            // Blur the entire page
           page.style.filter = 'blur(1px)';

            // Show the hidden div
            confirmation.style.visibility = 'visible';
    });
})});

closeButton.addEventListener('click', function() {
    // Revert the blur and hide the confirmation element
    page.style.filter = 'blur(0px)';
    confirmation.style.visibility = 'hidden'; // Hide the element
});











// Initialize an empty list to store the IDs
const favorites = [];

// Get all elements with the class ".fav_icon"
const favIcons = document.querySelectorAll('.fav_icon');

// Add a click event listener to each element
favIcons.forEach(function(iconElement) {
    iconElement.addEventListener('click', function() {
        // Get the ID of the clicked element
        const clickedID = iconElement.id;

        // Store the ID in the list
        favorites.push(clickedID);

        // You can do something with the stored IDs or display them
        console.log(`Clicked IDs: ${favorites}`);
    });
});
