const attraction = () => {
    document.querySelectorAll('.attractionImages').forEach(element => {
        const attractionImage = element.querySelectorAll('.attractionImage');
        const prevArrow = element.querySelector('.prevArrow');
        const nextArrow = element.querySelector('.nextArrow');

        const showArrows = () => {
            prevArrow.style.display = 'block';
            nextArrow.style.display = 'block';
        };

        const hideArrows = () => {
            prevArrow.style.display = 'none';
            nextArrow.style.display = 'none';
        };

        element.addEventListener('mouseenter', showArrows);
        element.addEventListener('mouseleave', hideArrows);

        let imageIndex = 0;

        const showSlide = (n) => {
            imageIndex = (n + attractionImage.length) % attractionImage.length;
            attractionImage.forEach((item, index) => {
                item.style.display = index === imageIndex ? 'block' : 'none';
            });
        };

        const plusImageIndex = (n) => {
            showSlide(imageIndex + n);
        };

        prevArrow.addEventListener('click', () => plusImageIndex(-1));
        nextArrow.addEventListener('click', () => plusImageIndex(1));

        showSlide(0);

        element.addEventListener("click", (e) => {
            if (e.target.classList.contains('attractionImage')) {
                const modal = document.getElementById("modal");
                const modalImg = document.getElementById("modal-img");
                const modalPrev = document.getElementsByClassName("prev")[0];
                const modalNext = document.getElementsByClassName("next")[0];
                const photos = [...element.getElementsByClassName('attractionImage')];
                const currentPhotoIndex = photos.findIndex(photo => photo === e.target);

                document.body.style.overflow = 'hidden';
                modalImg.src = e.target.src;
                modalImg.style.width = "60%";
                modalImg.style.height = "auto";
                modal.style.display = "flex";
                modalPrev.style.display = "block";
                modalNext.style.display = "block";
                modalPrev.style.left = "10%";
                modalNext.style.right = "10%";

                document.getElementsByClassName("close")[0].addEventListener("click", () => {
                    modal.style.display = "none";
                    document.body.style.overflow = '';
                });

                window.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                        document.body.style.overflow = '';
                    }
                });

                modalPrev.addEventListener("click", () => {
                    const newIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
                    modalImg.src = photos[newIndex].src;
                });

                modalNext.addEventListener("click", () => {
                    const newIndex = (currentPhotoIndex + 1) % photos.length;
                    modalImg.src = photos[newIndex].src;
                });
            }
        });
    });
};

export default attraction;
