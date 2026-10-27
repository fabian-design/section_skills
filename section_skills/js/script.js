
function efectoHabilidades() {
    const dist_skills = window.innerHeight-skills.getBoundingClientRect().top;
    if (dist_skills >= 180) {
        document.getElementById('html').classList.add('barra-progreso1');
    }
}
window.addEventListener('load', efectoHabilidades);




