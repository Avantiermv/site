const projects = document.querySelectorAll('.projects');

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