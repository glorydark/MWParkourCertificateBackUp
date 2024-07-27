document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    // 初始化幻灯片
    showSlide(slideIndex);

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    // 自动切换幻灯片
    let slideInterval = setInterval(nextSlide, 3000);

    // 绑定按钮事件
    nextButton.addEventListener('click', () => {
        clearInterval(slideInterval); // 停止自动切换
        nextSlide();
        slideInterval = setInterval(nextSlide, 3000); // 重新启动自动切换
    });

    prevButton.addEventListener('click', () => {
        clearInterval(slideInterval); // 停止自动切换
        prevSlide();
        slideInterval = setInterval(nextSlide, 3000); // 重新启动自动切换
    });
});
