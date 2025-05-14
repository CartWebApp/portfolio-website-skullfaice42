// to change the name across all the html pages cuz im too lazy to add it to all of them

document.title = "Jeremy's Portfolio";

//to add the favicon to all the pages
const animatedFavicon = document.createElement('link');
animatedFavicon.rel = 'icon';
animatedFavicon.type = 'image/gif';
animatedFavicon.href = 'icon/icon.gif';
document.head.appendChild(animatedFavicon);




// one up icon
    const oneUpMushroom = document.getElementById('oneUpMushroom');
    const hiddenElements = document.querySelectorAll('.container-nav .hidden, .container-nav .visible');
    const links = document.querySelectorAll('.container-nav a');

    // Toggle visibility when mushroom is clicked
    oneUpMushroom.addEventListener('click', function () {
        hiddenElements.forEach(function (element) {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
                element.classList.add('hidden');
            }
        });
    });

    // Hide all visible elements when "Close" is clicked
    links.forEach(function (link) {
        if (link.textContent.trim().toLowerCase() === 'close') {
            link.addEventListener('click', function (e) {
                e.preventDefault(); // prevent link from navigating
                hiddenElements.forEach(function (element) {
                    element.classList.remove('visible');
                    element.classList.add('hidden');
                });
            });
        }
    });
