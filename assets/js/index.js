/*=============== SERVICES MODAL ===============*/
// const modal = document.querySelectorAll('.services__modal'),
//       modalButton = document.querySelector('.services__button'),
//       modalClose = document.querySelectorAll('.services__modal-close')

// let activeModal = (modalClick) => {
//     modal[modalClick].classList.add('active-modal')
// }

// modalButton.forEach((modalButton, i) => {
//     modalButton.addEventListener('click', () => {
//         activeModal(i)
//     })
// })

// modalClose.forEach((modalClose) => {
//     modalClose.addEventListener('click', () => {
//         modal.forEach((modalRemove) => {
//             modalRemove.classList.remove('active-modal')
//         })
//     })
// })

const modals = document.querySelectorAll('.services__modal');
const modalOpenButtons = document.querySelectorAll('.services__button');
const modalCloseButtons = document.querySelectorAll('.services__modal-close');

// Open modal when a button is clicked
modalOpenButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        openModal(index);
    });
});

// Close modal when a close button is clicked
modalCloseButtons.forEach((button) => {
    button.addEventListener('click', closeModal);
});

// Function to open a modal
function openModal(index) {
    modals[index].classList.add('active-modal');
    // Optionally set focus to the modal or an element within the modal
}

// Function to close all modals
function closeModal() {
    modals.forEach((modal) => {
        modal.classList.remove('active-modal');
    });
}

// Close modals when the Escape key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});



/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor:true,
  
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
})

// document.addEventListener('DOMContentLoaded', function () {
//     const swiperCertificates = new Swiper('.certificate__swiper', {
//        loop: true,
//        spaceBetween: 32,
//        grabCursor: true,
    
//        pagination: {
//           el: '.swiper-pagination',
//           dynamicBullets: true,
//           clickable: true,
//        },
//     });
//  });
 

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


