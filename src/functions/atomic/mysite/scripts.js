const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
    let slides = slideshow.querySelectorAll('img');
    let index = 0;

    function showNextSlide() {
        slides[index].style.display = 'none';
        index = (index + 1) % slides.length;
        slides[index].style.display = 'block';
    }

    setInterval(showNextSlide, 6000);
});
