// модальное окно
/*
document.addEventListener("DOMContentLoaded", function(event){
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[id=modal-button]');
  const closeBtn  = document.querySelector('.modal__close');
  const switcheModal = () => {
    modal.classList.toggle('modal--visibility');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switcheModal);
  });

  closeBtn.addEventListener('click', switcheModal);
});
 */

/*слайдеры */
const swiper2 = new Swiper('.swiper-container-two', {
loop: true,
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}, 
pagination: {
  el: ".swiper-pagination",
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
},
});
$(function(){
  $("a[href^='#']").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
  });
});


//калькулятор 
function func(){
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var num3 = Number(document.getElementById("num3").value);
  var num4 = Number(document.getElementById("num4").value);
  var result = num1 + num2 + num3 * num4;

  document.getElementById("result").innerHTML = result;
  document.getElementById("box").classList.remove("result__none");
  }
const swiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }, 
});

$(document).ready(function () {

  //видео
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'rNLHC406Y6s',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) { 
    event.target.playVideo();
  }

  //валидация форм
  $('.subscription__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 3
      },
      UserPhone: "required",
      // правило - обьект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения
    messages: {
      userName:{
        required: "Имя обязательно",
      },
      UserPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите Emal",
      }
    },
    submitHandler: function(form) {

      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          $('.cover, .modal-success').show();
          $('.content-success').css('display', 'inline-block');
        },
        error: function (response) {
          console.error('Ошибка запроса: ' + response)
        },
      })
    },
  });

  $('.questions__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 3
      },
      userPhone: "required",
      // правило - обьект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения
    messages: {
      userName:{
        required: "Имя обязательно",
        minlength: "Имя не короче трех букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите Emal",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          $('.cover, .modal-success').show();
          $('.content-success').css('display', 'inline-block');
        },
        error: function (response) {
          console.error('Ошибка запроса: ' + response)
        },
      })
    },
  });


  $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"});
});
