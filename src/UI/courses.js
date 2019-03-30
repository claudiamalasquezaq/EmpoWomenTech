export default () => {
  const sectionElem = document.createElement('section');
  const sectionContent = `
        <div>
          <h1>HTML5</h1>
          <p>HTML, que significa Lenguaje de Marcado para Hipertextos (HyperText Markup Language)es el elemento de construcción más básico de una página web y se usa para crear y representar visualmente una página web. Determina el contenido de la página web, pero no su funcionalidad. Otras tecnologías distintas de HTML son usadas generalmente para describir la apariencia/presentación de una página web (CSS) o su funcionalidad (JavaScript)</p>
          <button id="btn-go-html" class="btns-home font-bio" type="button">Ir a HTML5</button>
        </div>
        <div>
          <h1>CSS3</h1>
          <p>es la última evolución del lenguaje de las Hojas de Estilo en Cascada (Cascading Style Sheets), y pretende ampliar la versión CSS2.1. Trae consigo muchas novedades altamente esperadas , como las esquinas redondeadas, sombras, gradientes , transiciones o animaciones, y nuevos layouts como multi-columnas, cajas flexibles o maquetas de diseño en cuadrícula (grid layouts).</p>
          <button id="btn-go-css" class="btns-home font-bio" type="button">Ir a CSS3</button>
        </div>
        <div>
        <h1>BOOTSTRAP4</h1>
        <p>es un conjunto de herramientas de código abierto para desarrollar con HTML, CSS y JS. Realice rápidamente un prototipo de sus ideas o construya su aplicación completa con nuestras variables y combinaciones de Sass, sistema de cuadrícula sensible, extensos componentes precompilados y poderosos complementos creados en jQuery.</p>
        <button id="btn-go-bootstrap" class="btns-home font-bio" type="button">Ir a BOOTSTRAP4</button>
      </div>
      <div>
      <h1>WORDPRESS</h1>
      <p>es un sistema de gestión de contenidos o CMS enfocado a la creación de cualquier tipo de página web. Originalmente alcanzó una gran popularidad en la creación de blogs, para convertirse con el tiempo en una de las principales herramientas para la creación de páginas web comerciales.</p>
      <button id="btn-go-wordpress" class="btns-home font-bio" type="button">Ir a WORDPRESS</button>
    </div>`;
  sectionElem.setAttribute('id', 'content-html');
  sectionElem.innerHTML = sectionContent;
  document.getElementById('advertising').innerHTML = '';
  const linkTest = sectionElem.querySelector('#link-test');
  linkTest.addEventListener('click',  () => {
    window.location.hash = '#/test';
  });
  return sectionElem;
};