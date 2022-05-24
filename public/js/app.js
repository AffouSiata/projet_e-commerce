// $('.partie2').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     autoplay: true,
//     cssEase: 'linear'
//   });





  $('.partie2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });


let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
   navbar.classList.toggle('active')

}
window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


  // $('.carousel').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });

  





  


 