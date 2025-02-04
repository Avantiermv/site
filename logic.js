const projects = document.querySelectorAll('.projects');
const menu = document.getElementById('menu-img-mobile');
const menuMobile = document.getElementById('menu-mobile');
const backArrow = document.getElementById('back-arrow');
const labelButton = document.getElementById('checkbox');
const usaFlag = document.getElementById('usa-flag');
const brazilFlag = document.getElementById('brazil-flag');

menu.addEventListener('click', () => {
    if(menuMobile.classList.contains('hidden')){
        menuMobile.classList.remove('hidden');
        menuMobile.classList.add('visible');
    } 
});

backArrow.addEventListener('click', () => {
    if(menuMobile.classList.contains('visible')){
        menuMobile.classList.remove('visible');
        menuMobile.classList.add('hidden');
    }
});

labelButton.addEventListener('change', () => {
    if(labelButton.checked){
        usaFlag.style.display = 'block';
        brazilFlag.style.display =  'none';
    } else {
        usaFlag.style.display = 'none';
        brazilFlag.style.display =  'block';
    }
});

projects.forEach(project => {
    project.addEventListener('click', () => {
        //Fecha as descrições
        projects.forEach(proj => {
            const desc = proj.querySelector('span');
            if(proj !== project){
                desc.classList.add('hidden');
                desc.classList.remove('visible');
            }
        });

        //Alterna a visibilidade das descrições
        const description = project.querySelector('span');
        description.classList.toggle('visible');
        description.classList.toggle('hidden');
    });
});

function changelanguage(){
    
}