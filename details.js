var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 5,
      },
    },
  });





  let mm = document.querySelector('#contenu1')
        let pp = document.querySelector('#contenu2')
        let ss = document.querySelector('#contenu3')
        function affiche(){
            let mes = document.querySelector('.lien1')
            mm.style.display="block";
            pp.style.display="none"; 
            ss.style.display="none";   
        }
        function affiche1(){
           
            let autre = document.querySelector('.lien2')
            
            console.log("bonjour",pp);
            pp.style.display="block"; 
            mm.style.display="none";
            ss.style.display="none";
        }
        function affiche2(){
            let dd = document.querySelector('.lien3')
            mm.style.display="none";
            pp.style.display="none"; 
            ss.style.display="block";
        }