const projects = document.querySelectorAll('.projects');
const menu = document.getElementById('menu-img-mobile');
const menumobile = document.getElementById('menu-mobile');

menu.addEventListener('click', () => {
    menumobile.classList.toggle('visible');
    menumobile.classList.toggle('hidden');
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