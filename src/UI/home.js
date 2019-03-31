export default () => {
  const formElem = document.createElement('form');
  const formContent = `
  <div class="home">
    <h2>¡Bienvenida!</h2>
    <img src="https://www.staticjbx.com/images/blog/80481/80481_desktop_623eb2043e71f542c82d5d5bb3fb6601_photo.jpg" class="img-tree"/>
    <p>
      EmpoWomenTech es una app educativa que te ayudará a conseguir un trabajo como maquetadora web adquiriendo
      conocimientos en HTML5, CSS3 Y Bootstrap 4.
      Regístrate para empezar a aprender.
    </p>
    <div>
      <button id="btn-frm-register" class="btns-home font-bio" type="button">Regístrate</button>
    </div>
    <div>
      <button id="btn-frm-login" class="btns-home font-bio" type="button">Inicia sesión</button>
    </div>
  </div>`;
  formElem.setAttribute('id', 'frm-home');
  formElem.innerHTML = formContent;
  document.getElementById('profile').innerHTML = '';
  const btnFormRegister = formElem.querySelector('#btn-frm-register');
  btnFormRegister.addEventListener('click', () => {
   window.location.hash = '#/register';
   });

  const btnFormLogin = formElem.querySelector('#btn-frm-login');
   btnFormLogin.addEventListener('click', () => {
    window.location.hash = '#/login';
  });
  // EVITAR COMPORTAMIENTO DEL BOTON
  return formElem;
};