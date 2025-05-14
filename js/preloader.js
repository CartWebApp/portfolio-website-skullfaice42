// Define the image sets
const folderImages = {
    'index-overlay': [
      '../images/me.webp'
    ],
    'world-map': [
      '../images/uncleared/1.webp',
      '../images/uncleared/2.webp'
    ],
    'about-me': [
      'images/1-1.2.webp',
      'images/1-1.3.webp',
      'images/1-1.4.webp',
      'images/1-1.5.webp'
    ],
    'world-map': [
      '../images/uncleared/2.5.webp',
      '../images/uncleared/3.webp',

      '../images/uncleared/4.webp',
      '../images/uncleared/5.webp',

      '../images/uncleared/5.webp',
      '../images/uncleared/6.webp',

      '../images/uncleared/over-four.webp',
      '../images/uncleared/overlay-me.webp',

      '../images/uncleared/after-bully.webp',
      '../images/uncleared/7.webp',

      '../images/uncleared/7.webp',
      '../images/uncleared/8.webp',

      '../images/uncleared/8.webp',
      '../images/cleared/1.webp',

      '../images/uncleared/1.webp',
      '../images/uncleared/2.webp',
    ],
    'resume': [
      'images/2-1.1.webp'
    ],
    'overview': [
      'images/3-1.1.webp',
      'images/github.webp',
      'images/timeline.webp',
      'images/adrino.webp'
    ],
    'mushroom': [
      '../css/main.css'
    ],
    'contact-info': [
      'images/1-4.1.webp',
      'images/headshot-of-me.webp'
    ],
    'bulley': [
      'images/starting.webp',
      'images/cropped/starting.webp',
      'images/cropped/1.webp',
      'images/cropped/2.webp',
      'images/cropped/3.webp',
      'images/cropped/4.webp',
      'images/cropped/5.webp',
      'images/cropped/6.webp',
      'images/cropped/7.webp',
      'images/cropped/8.webp'
    ],
    'proficient-skills': [
      'images/1-5.1.webp',
      'images/vs-code.webp',
      'images/python.webp',
      'images/fusion.webp',


      'images/1-5.2.webp',
      'images/vs-code-before.webp',
      'images/vs-code-after.webp',

      'images/1-5.3.webp',
      'images/python-example.webp',

      'images/1-5.4.webp',
      'images/carousel/1.webp',
      'images/carousel/2.webp',
      'images/carousel/3.webp',
      'images/carousel/4.webp',
      'images/carousel/5.webp',
      'images/carousel/6.webp',
      'images/carousel/7.webp',
      'images/carousel/8.webp',
      'images/carousel/9.webp'
    ],
    'goals': [
      'images/1-6.1.webp',
      '../images/uncleared/2.webp'
    ],

    'castle': [
      'images/c-1.webp',
      '../images/uncleared/2.webp'
    ],
  };
  

// Main preload function
function preloadImagesInOrder(folderImages, basePath, onComplete) {
    const folders = Object.keys(folderImages);
    let currentFolder = 0;

    function preloadNextFolder() {
        if (currentFolder >= folders.length) {
            if (onComplete) onComplete();
            return;
        }

        const images = folderImages[folders[currentFolder]];
        let loaded = 0;

        images.forEach(filename => {
            const img = new Image();
            img.src = `${basePath}${filename}`;
            img.onload = img.onerror = () => {
                loaded++;
                if (loaded === images.length) {
                    currentFolder++;
                    preloadNextFolder();
                }
            };
        });
    }

    preloadNextFolder();
}


// Kick it off
preloadImagesInOrder(folderImages, '/project/', () => {
    console.log("All images preloaded!");
});
