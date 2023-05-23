const logoMenu = document.querySelector('.logoMenuImg');
const contItems = document.querySelector('.contItems');
const arrItems = document.querySelectorAll('.items');

logoMenu.addEventListener('click', () => {

    if(contItems.className === 'contItems'){

        contItems.className += " responsive";
        logoMenu.style.width = "35px";
        logoMenu.src = 'ressources/close.png';

    } else {

        contItems.className = "contItems";
        logoMenu.style.width = "30px";
        logoMenu.src = 'ressources/menu.png';

    }

})

arrItems.forEach(item => {

    item.addEventListener('click', () => {

        contItems.className = "contItems";
        logoMenu.src = 'ressources/menu.png';
        
    })

})