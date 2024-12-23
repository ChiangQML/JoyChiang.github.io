const videos = [
    'https://www.youtube.com/embed/beehz_ZGQ_o?si=ZUxMEG0clTt_F2i6',
    'https://www.youtube.com/embed/n5-V7dkekD4?si=2m2c9JFzP4cE1Dyk',
    'https://www.youtube.com/embed/fVh1VMB8PnE?si=hpQYkGd7PAQZ93u2',
];

const descriptions = [
    'Fall 2023 - Spring 2024 \n Empowering data-driven decision-making of Catholic Schools. Collaborated within a dynamic 4-person team in a research-driven, Agile environment, contributing to Full Stack Development and CyberSecurity projects using React, Node.js, and AWS.\nDelivered a user-friendly input form and intuitive operations dashboard, streamlining data management for a Catholic school system with 72 sub-schools.',
    'Webcam API. Web-based application I independently developed using Node.js and React. It allows users to capture photos and record videos directly through their webcam, with media files automatically saved to their local storage. This project demonstrates my ability to design and implement interactive features, integrate front-end and back-end technologies, and deliver user-friendly functionality.',
    'Synchronize Reminders to Calendar. Using JavaScript and Shortcuts to help you synchronize the reminders to Calendar. It helps you to record the time you spend on a specific task and save it in the calendar.',
];
const data = {
    videos: videos,
    descriptions: descriptions,
    index: 0, 
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
    objs.videoFrame.src = data.videos[data.index]; 
    objs.description.textContent = data.descriptions[data.index]; 
    updateSelectedButton();
};

// Move to the next video
const cbPageNext = function () {
    data.index = (data.index + 1) % data.videos.length; 
    updateCarousel();
};

// Move to the previous video
const cbPagePrev = function () {
    data.index = (data.index - 1 + data.videos.length) % data.videos.length;
    updateCarousel();
};


const cbClick = function (e) {
    data.index = Number(e.target.dataset.imgid); 
    updateCarousel();
};

// Update the selected button's appearance
const updateSelectedButton = function () {
    data.arrButtons.forEach((button, index) => {
        button.classList.toggle('selected', index === data.index); 
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
        button.innerText = `Video ${i + 1}`; 
        button.dataset.imgid = i; 
        button.addEventListener('click', cbClick); 
        objs.btnBar.appendChild(button); 
        data.arrButtons.push(button); 
    }

    updateSelectedButton();
};

// Initialize the carousel
createCarousel();


// images version
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
// const updateCarousel = function () {
//     objs.image.src = data.images[data.index]; // Update image source
//     objs.imageLink.href = data.links[data.index]; // Update link dynamically
//     objs.description.textContent = data.descriptions[data.index]; // Update description
//     updateSelectedButton();
// };
//
// const cbPageNext = function () {
//     data.index = (data.index + 1) % data.images.length;
//     updateCarousel();
// };
//
// const cbPagePrev = function () {
//     data.index = (data.index - 1 + data.images.length) % data.images.length;
//     updateCarousel();
// };
//
// const cbClick = function (e) {
//     data.index = Number(e.target.dataset.imgid);
//     updateCarousel();
// };
//
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
// const createCarousel = function () {
//     // Set initial image (Image 1)
//     objs.image.src = data.images[data.index];
//     objs.imageLink.href = data.links[data.index];
//     objs.description.textContent = data.descriptions[data.index];
//
//     objs.navPrev.addEventListener('click', cbPagePrev);
//     objs.navNext.addEventListener('click', cbPageNext);
//
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
// createCarousel();



