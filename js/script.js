$(document).ready(function(){
	
  $("body").on("click",".cada_setor",function(){
     $('.modal').modal("hide"); 
     $(this).children('.modal').modal("show"); 

     $(this).addClass("after_modal_appended");
     $(this).addClass("overflows");
     //appending modal background inside the blue div
     $('.modal-backdrop').appendTo(this);   
     //remove the padding right and modal-open class from the body tag which bootstrap adds when a modal is shown
     $('body').removeClass("modal-open")
       $('body').css("padding-right","");
         
 });

$('.clientes_logos_slicked').slick({
 infinite: false,
 speed: 300,
 slidesToShow: 6,
 slidesToScroll: 1,
 responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 3,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
});

$('.depoimentos_slicked').slick({
 infinite: true,
 speed: 300,
 slidesToShow: 1,
 slidesToScroll: 1
});
$('.acontece_row').slick({
 infinite: false,
 speed: 300,
 slidesToShow: 3,
 slidesToScroll: 1,
 responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
});
    AOS.init();
});

/* Count numbers of section Nossos Numeros */
var a = 0;
$(window).scroll(function() {

 var oTop = $('.nossos_numeros').offset().top - window.innerHeight;
 if (a == 0 && $(window).scrollTop() > oTop) {
   $('.counter-value').each(function() {
     var $this = $(this),
       countTo = $this.attr('data-count');
     $({
       countNum: $this.text()
     }).animate({
         countNum: countTo
       },

       {

         duration: 3000,
         easing: 'swing',
         step: function() {
           $this.text(Math.floor(this.countNum));
         },
         complete: function() {
           $this.text(this.countNum);
           //alert('finished');
         }

       });
   });
   a = 1;
 }

});

jQuery(function($)
{
   $(".hamburger").click(function()
   {
       $(".navigation").toggleClass("open");
   })
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("topo");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
 if (window.pageYOffset > sticky) {
   header.classList.add("sticky");
 } else {
   header.classList.remove("sticky");
 }
}
