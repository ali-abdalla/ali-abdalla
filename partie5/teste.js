const carouselSlide = document.querySelector('.caroussel_slide');
const carouselImage = document.querySelectorAll('.caroussel_slide img');

console.log(carouselImage)
//bouton 
const prevBtn =document.querySelector('#prevBtn');
const nextBtn =document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' +(-size * counter)+'px)';


//button listener

nextBtn.addEventListener('click',()=>
{ 
    if(counter >= carouselImage.length -1)return; 
   
carouselSlide.style.transition="transform 0.4s ease-in-out";
counter++;
carouselSlide.style.transform='translateX('+(-size*counter) +'px)';
});


prevBtn.addEventListener('click',()=>
{
    if (counter <= 0) return;
carouselSlide.style.transition="transform 0.4s ease-in-out";
counter--;
carouselSlide.style.transform='translateX('+(-size*counter) +'px)';
});

carouselSlide.addEventListener('transitionend',(  )=>{
if(carouselImage[counter].id === 'lastclone' )
{
carouselSlide.style.transition="none";

counter=carouselImage.length -2;
carouselSlide.style.transform ='translateX('+(-size*counter)+'px)';

}
if(carouselImage[counter].id === 'firstclone' )
{
carouselSlide.style.transition="none";
//console.log(carouselImage.length);
counter=carouselImage.length -counter-1;
carouselSlide.style.transform ='translateX('+(-size*counter)+'px)';
}
});