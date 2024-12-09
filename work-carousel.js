// const images = [
//     'video1.png',
//     'video2.png',
// ];
//
// const links = [
//     'https://youtu.be/beehz_ZGQ_o',
//     'https://www.youtube.com/watch?v=fVh1VMB8PnE',
// ];
//
// const descriptions = [
//     'Empowering data-driven decision-making of Catholic Schools. Collaborated within a dynamic 4-person team in a research-driven, Agile environment, contributing to Full Stack Development and CyberSecurity projects using React, Node.js, and AWS.\nDelivered a user-friendly input form and intuitive operations dashboard, streamlining data management for a Catholic school system with 72 sub-schools.',
//     'Synchronize Reminders to Calendar. Using JavaScript and Shortcuts to help you synchronize the reminders to Calendar.\nIt helps you to record the time you spend on a specific task and save it in the calendar.',
// ];
//
// const data = {
//     images: images,
//     descriptions: descriptions,
//     index: 0, // Start with the first image
//     arrButtons: [],
//     links: links,
// };
//
// const objs = {
//     imageLink: document.querySelector('#picture-carousel .picture-container #image-link'),
//     image: document.querySelector('#picture-carousel .picture-container img'),
//     description: document.querySelector('#picture-carousel .picture-description'),
//     btnBar: document.querySelector('#picture-carousel .btnBar'),
//     navPrev: document.querySelector('#picture-carousel .nav .btnNav.prev'),
//     navNext: document.querySelector('#picture-carousel .nav .btnNav.next'),
// };
//
// // Function to update the carousel
// const updateCarousel = function () {
//     objs.image.src = data.images[data.index]; // Update image source
//     objs.imageLink.href = data.links[data.index]; // Update link dynamically
//     objs.description.textContent = data.descriptions[data.index]; // Update description
//     updateSelectedButton();
// };
//
// // Move to the next image
// const cbPageNext = function () {
//     data.index = (data.index + 1) % data.images.length;
//     updateCarousel();
// };
//
// // Move to the previous image
// const cbPagePrev = function () {
//     data.index = (data.index - 1 + data.images.length) % data.images.length;
//     updateCarousel();
// };
//
// // Handle button click to jump to a specific image
// const cbClick = function (e) {
//     data.index = Number(e.target.dataset.imgid);
//     updateCarousel();
// };
//
// // Update the selected button's appearance
// const updateSelectedButton = function () {
//     data.arrButtons.forEach((button, index) => {
//         if (index === data.index) {
//             button.classList.add('selected');
//         } else {
//             button.classList.remove('selected');
//         }
//     });
// };
//
// // Create the carousel elements
// const createCarousel = function () {
//     // Set initial image (Image 1)
//     objs.image.src = data.images[data.index];
//     objs.imageLink.href = data.links[data.index];
//     objs.description.textContent = data.descriptions[data.index];
//
//     // Add event listeners
//     objs.navPrev.addEventListener('click', cbPagePrev);
//     objs.navNext.addEventListener('click', cbPageNext);
//
//     // Create navigation buttons for each image
//     for (let i = 0; i < data.images.length; i++) {
//         let elementBtn = document.createElement('button');
//         elementBtn.innerText = `Image ${i + 1}`; // Label each button
//         elementBtn.dataset.imgid = i;
//         elementBtn.addEventListener('click', cbClick);
//         objs.btnBar.appendChild(elementBtn);
//         data.arrButtons.push(elementBtn);
//     }
//
//     updateSelectedButton();
// };
//
// // Initialize the carousel with image 1
// createCarousel();





const videos = [
    'https://www.youtube.com/embed/beehz_ZGQ_o?si=ZUxMEG0clTt_F2i6',
    'https://www.youtube.com/embed/fVh1VMB8PnE?si=hpQYkGd7PAQZ93u2',
];

const descriptions = [
    'Empowering data-driven decision-making of Catholic Schools. Collaborated within a dynamic 4-person team in a research-driven, Agile environment, contributing to Full Stack Development and CyberSecurity projects using React, Node.js, and AWS.\nDelivered a user-friendly input form and intuitive operations dashboard, streamlining data management for a Catholic school system with 72 sub-schools.',
    'Synchronize Reminders to Calendar. Using JavaScript and Shortcuts to help you synchronize the reminders to Calendar.\nIt helps you to record the time you spend on a specific task and save it in the calendar.',
];

const data = {
    videos: videos,
    descriptions: descriptions,
    index: 0, // Start with the first video
    arrButtons: [],
};

const objs = {
    videoFrame: document.querySelector('#video-carousel .video-container iframe'),
    description: document.querySelector('#video-carousel .video-description'),
    btnBar: document.querySelector('#video-carousel .btnBar'),
    navPrev: document.querySelector('#video-carousel .nav .btnNav.prev'),
    navNext: document.querySelector('#video-carousel .nav .btnNav.next'),
};

// Function to update the carousel
const updateCarousel = function () {
    objs.videoFrame.src = data.videos[data.index]; // Update video source
    objs.description.textContent = data.descriptions[data.index]; // Update the description
    updateSelectedButton();
};

// Move to the next video
const cbPageNext = function () {
    data.index = (data.index + 1) % data.videos.length; // Loop back to the first video
    updateCarousel();
};

// Move to the previous video
const cbPagePrev = function () {
    data.index = (data.index - 1 + data.videos.length) % data.videos.length; // Loop back to the last video
    updateCarousel();
};

// Handle button click to jump to a specific video
const cbClick = function (e) {
    data.index = Number(e.target.dataset.imgid); // Get the video index from the button's data attribute
    updateCarousel();
};

// Update the selected button's appearance
const updateSelectedButton = function () {
    data.arrButtons.forEach((button, index) => {
        button.classList.toggle('selected', index === data.index); // Highlight the active button
    });
};

// Create the carousel elements
const createCarousel = function () {
    // Set initial video and description
    updateCarousel();

    // Add event listeners for navigation buttons
    objs.navPrev.addEventListener('click', cbPagePrev);
    objs.navNext.addEventListener('click', cbPageNext);

    // Create navigation buttons for each video
    for (let i = 0; i < data.videos.length; i++) {
        const button = document.createElement('button');
        button.innerText = `Video ${i + 1}`; // Label each button
        button.dataset.imgid = i; // Store the video index in a data attribute
        button.addEventListener('click', cbClick); // Add click event to navigate to the video
        objs.btnBar.appendChild(button); // Append the button to the button bar
        data.arrButtons.push(button); // Store the button in the array
    }

    updateSelectedButton();
};

// Initialize the carousel
createCarousel();
