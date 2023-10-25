const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
];

var i = 0;
var sliderImage = document.getElementById('slider-image');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

// Function to display the current image
function showImage(index) {
    sliderImage.src = images[index];
}

// Initial image display
showImage(i);

// Event listener for the "Previous" button
prevBtn.addEventListener('click', () => {
    if (i > 0) {
        i--;
    } else {
        i = images.length - 1;
    }
    showImage(i);
});

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    showImage(i);
});