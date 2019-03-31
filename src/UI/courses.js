export default () => {
  const sectionElem = document.createElement('section');
  const sectionContent = `
    <div class="div-courses white">
      <div class="white">
        <img src="https://i.ibb.co/MpxfNn0/photo-1454165205744-3b78555e5572-ixlib-rb-1-2.jpg" class="img-course"/>
        <button id="btn-go-html" class="btns-home font-bio btn-go-course" type="button">Ir a HTML 5</button>
      </div>
      <div class="white">
        <img src="https://i.ibb.co/4Pdsjqm/photo-1454165205744-3b78555e5572-ixlib-rb-1-1.jpg" class="img-course"/> 
        <button id="btn-go-css" class="btns-home font-bio btn-go-course" type="button">Ir a CSS 3</button>
      </div>
      <div class="white">
        <img src="https://i.ibb.co/6Hn6J7K/photo-1454165205744-3b78555e5572-ixlib-rb-1-3.jpg" class="img-course"/>
        <button id="btn-go-bootstrap" class="btns-home font-bio btn-go-course" type="button">Ir a BOOTSTRAP 4</button>
      </div>
      <div class="white">
        <img src="https://i.ibb.co/1sbPzNg/photo-1454165205744-3b78555e5572-ixlib-rb-1-4.jpg" class="img-course"/>
        <button id="btn-go-wordpress" class="btns-home font-bio btn-go-course" type="button">Ir a WORDPRESS</button>
      </div>
    </div>`;
  sectionElem.setAttribute('id', 'content-html');
  sectionElem.innerHTML = sectionContent;
  const btnGoHtml = sectionElem.querySelector('#btn-go-html');
  btnGoHtml.addEventListener('click',  () => {
    window.location.hash = '#/html';
  });
  const btnGoCss = sectionElem.querySelector('#btn-go-css');
  btnGoCss.addEventListener('click',  () => {
    window.location.hash = '#/css';
  });
  const btnGoBootstrap = sectionElem.querySelector('#btn-go-bootstrap');
  btnGoBootstrap.addEventListener('click',  () => {
    window.location.hash = '#/bootstrap';
  });
  const btnGoWordpress = sectionElem.querySelector('#btn-go-wordpress');
  btnGoWordpress.addEventListener('click',  () => {
    window.location.hash = '#/wordPress';
  });
  return sectionElem;
};