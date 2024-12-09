document.querySelector('.small-menu').addEventListener('click', function() {
    const menuContainer = document.querySelector('.small-menu-container');
    if (menuContainer.style.opacity === '1') {
        menuContainer.style.opacity = '0';
    } else {
        menuContainer.style.visibility = 'visible'; 
        menuContainer.style.opacity = '1'; 
    }
});

document.querySelector(".school-link > a > img").addEventListener('mouseenter', function() {
    document.querySelector(".school-link > p").style.visibility = 'visible';
});

// To hide the paragraph again when the mouse leaves the image
document.querySelector(".school-link > a > img").addEventListener('mouseleave', function() {
    document.querySelector(".school-link > p").style.visibility = 'hidden';
});
