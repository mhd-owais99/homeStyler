
// .....slider start
document.addEventListener('DOMContentLoaded', function () {
    const nextBtn = document.querySelector('.next'),
        prevBtn = document.querySelector('.prev'),
        carousel = document.querySelector('.carousel'),
        list = document.querySelector('.list'),
        items = document.querySelectorAll('.item'),
        runningTime = document.querySelector('.carousel .timeRunning');

    let timeRunningDuration = 3000;
    let timeAutoNextDuration = 7000;

    function showSlider(type) {
        let sliderItemsDom = list.querySelectorAll('.item');
        if (type === 'next') {
            list.appendChild(sliderItemsDom[0]);
            carousel.classList.add('next');
        } else {
            list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
            carousel.classList.add('prev');
        }

        clearTimeout(runTimeOut);

        runTimeOut = setTimeout(() => {
            carousel.classList.remove('next');
            carousel.classList.remove('prev');
        }, timeRunningDuration);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextBtn.click();
        }, timeAutoNextDuration);

        resetTimeAnimation();
    }

    function resetTimeAnimation() {
        runningTime.style.animation = 'none';
        runningTime.offsetHeight; 
        runningTime.style.animation = null;
        runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    }

    nextBtn.addEventListener('click', () => showSlider('next'));
    prevBtn.addEventListener('click', () => showSlider('prev'));

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNextDuration);

    resetTimeAnimation();
});
// .....slider start 

////contact us

function check() {
    let inp1 = document.getElementById('floatingName').value;
    let sp1 = document.getElementById('span1');
    let reg1 = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

    let inp2 = document.getElementById('floatingInput').value;
    let sp2 = document.getElementById('span2');
    let reg2 = /^[a-zA-Z]{3,20}[0-9]+@[a-z]{3,7}\.[a-z]{2,5}$/;

    let textareaInput = document.getElementById('floatingTextbox').value;
    let textareaSpan = document.getElementById('span3');
    let textareaReg = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

    let valid = true;

    sp1.innerText = '';
    sp2.innerText = '';
    textareaSpan.innerText = '';

    if (inp1 === '') {
        sp1.innerText = 'Name is required.';
        valid = false;
    } else if (!reg1.test(inp1)) {
        sp1.innerText = 'Enter a valid Name.';
        valid = false;
    }

    if (inp2 === '') {
        sp2.innerText = 'Email is required.';
        valid = false;
    } else if (!reg2.test(inp2)) {
        sp2.innerText = 'Enter a valid Email Address.';
        valid = false;
    }

    if (textareaInput === '') {
        textareaSpan.innerText = 'Message is required.';
        valid = false;
    } else if (!textareaReg.test(textareaInput)) {
        textareaSpan.innerText = 'Leave correct message';
        valid = false;
    }

    if (valid) {
        let formModal = new bootstrap.Modal(document.getElementById('form-modal'));
        formModal.show();

        document.getElementById('floatingName').value = '';
        document.getElementById('floatingInput').value = '';
        document.getElementById('floatingTextbox').value = '';
    }
}
///contact end

//  ============feedback ============

function sub() {
    let input1 = document.getElementById('floatingUser').value;
    let span1 = document.getElementById('feed1');
    let regex1 = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

    let input2 = document.getElementById('floatingEmail').value;
    let span2 = document.getElementById('feed2');
    let regex2 = /^[a-zA-Z]{3,20}[0-9]+@[a-z]{3,7}\.[a-z]{2,5}$/;

    let textareaInput1 = document.getElementById('floatingTextarea').value;
    let textareaSpan1 = document.getElementById('feed3');
    let textareaReg1 = /^[a-zA-Z]+([ \t]+[a-zA-Z]+)*[ \t]*[.,]*[ \t]*$/;

    let val = true;

    span1.innerText = '';
    span2.innerText = '';
    textareaSpan1.innerText = '';

    if (input1 === '') {
        span1.innerText = 'Name is required.';
        val = false;
    } else if (!regex1.test(input1)) {
        span1.innerText = 'Enter a valid Name.';
        val = false;
    }

    if (input2 === '') {
        span2.innerText = 'Email is required.';
        val = false;
    } else if (!regex2.test(input2)) {
        span2.innerText = 'Enter a valid Email Address.';
        val = false;
    }

    if (textareaInput1 === '') {
        textareaSpan1.innerText = 'Message is required.';
        val = false;
    } else if (!textareaReg1.test(textareaInput1)) {
        textareaSpan1.innerText = 'Leave correct message';
        val = false;
    }

    if (val) {
        let feedModal = new bootstrap.Modal(document.getElementById('feed-modal'));
        feedModal.show();

        document.getElementById('floatingUser').value = '';
        document.getElementById('floatingEmail').value = '';
        document.getElementById('floatingTextarea').value = '';

        let qualityRatings = document.getElementsByName('quality');
        for (let i = 0; i < qualityRatings.length; i++) {
            qualityRatings[i].checked = false;
        }

        let deliveryRatings = document.getElementsByName('delivery');
        for (let i = 0; i < deliveryRatings.length; i++) {
            deliveryRatings[i].checked = false;
        }
       
    }
}

$(document).ready(function () {
    $('.buttons').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.product').show(400);
        } else {
            $('.product').not('.' + filter).hide(200);
            $('.product').filter('.' + filter).show(400);
        }
    });
    var services = getUrlParameter('services');
    if (services != null) {
        displayProductByKey(services);
        if (services.length > 1) {
            $('.product').not('.' + services).hide(200);
            $('.product').filter('.' + services).show(400);
        }
    }
});
function getUrlParameter(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
function displayProductByKey(key) {
    $('.buttons[data-filter="' + key + '"]').addClass('active').siblings().removeClass('active');
}


// ========reviews============

$(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed:1000,
    items : 3,
    loop: true,
    nav:true,
    navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    
});

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
