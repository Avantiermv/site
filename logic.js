const projects = document.querySelectorAll('.projects');
const menu = document.getElementById('menuimgmobile');
const menumobile = document.getElementById('menumobile');

menu.addEventListener('click', () => {
    menumobile.classList.toggle('visible' /*!menumobile.classList.contains('visible')*/);
    menumobile.classList.toggle('hidden' /*!menumobile.classList.contains('hidden')*/);
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