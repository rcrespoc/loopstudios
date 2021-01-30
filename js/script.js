const d = document,
body = d.querySelector('body'),
menuBtn = d.querySelector('.menu-btn'),
menuNavegacion = d.querySelector('.menu-navegacion'),
barraPrincipal = d.querySelector('.barra-principal');

menuBtn.addEventListener('click', e => {
  menuNavegacion.classList.toggle('is-active');
  gestionarBotonHamburguesa();
  barraPrincipal.classList.toggle('bg-black-1');
})

menuNavegacion.addEventListener('click', e => {
  if(e.target === menuNavegacion) return;
  barraPrincipal.classList.remove('bg-black-1');
  gestionarBotonHamburguesa();
  menuNavegacion.classList.remove('is-active');
})

function gestionarBotonHamburguesa() {
  menuBtn.firstElementChild.classList.toggle('none');
  menuBtn.lastElementChild.classList.toggle('none');
}