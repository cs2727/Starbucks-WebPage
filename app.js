const drink1 = document.getElementById('miniImg1');
const drink2 = document.getElementById('miniImg2');
const drink3 = document.getElementById('miniImg3');
const drinkShowcased = document.getElementById('drinkShowcased');
const circle = document.getElementById('circle');
const socialMediaContainer = document.getElementById('socialMediaContainer');
const burgerEmojiButton = document.getElementById('burgerEmoji');
const navigation = document.querySelector('.unorderedListContainer');
const header = document.querySelector('header');
const closeElement = document.querySelector('.close');
let color;





function openNavigation(){
    navigation.id = 'navOpened'; //
    navigation.style.backgroundColor = color;
    header.style.position = 'static';
    closeElement.classList.add('open');
};

function closeNavigation(){
    navigation.removeAttribute('id');//
    navigation.style.backgroundColor = 'transparent';
    header.style.position = 'relative';
    closeElement.classList.remove('open');
}


function toggleDrinkImages(eventInstance){
    const drinkId = eventInstance.currentTarget.id;

    switch(drinkId){
        case 'miniImg1' :
        drinkShowcased.src = "images/img1.png";
        circle.style.backgroundColor = 'green';
        socialMediaContainer.style.backgroundColor = 'green';
        color = 'green';
        break;

        case 'miniImg2' : 
        drinkShowcased.src = "images/img2.png";
        circle.style.backgroundColor = 'pink';
        socialMediaContainer.style.backgroundColor = 'pink';
        color = 'pink';
        break;

        default :
        drinkShowcased.src = "images/img3.png";
        circle.style.backgroundColor = 'purple';
        socialMediaContainer.style.backgroundColor = 'purple';
        color = 'purple';

    }
};








burgerEmojiButton.addEventListener('click', openNavigation);
closeElement.addEventListener('click', closeNavigation)


drink1.addEventListener('click', toggleDrinkImages);
drink2.addEventListener('click', toggleDrinkImages);
drink3.addEventListener('click', toggleDrinkImages);