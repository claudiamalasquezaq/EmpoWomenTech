export default () => {
  const sectionElem = document.createElement('section');
  const sectionContent = `
        <div>
          <h1>HTML5</h1>
          <h2>concepto HTML</h2>
          <p>HTML, que significa Lenguaje de Marcado para Hipertextos (HyperText Markup Language)es el elemento de construcción más básico de una página web y se usa para crear y representar visualmente una página web. Determina el contenido de la página web, pero no su funcionalidad. Otras tecnologías distintas de HTML son usadas generalmente para describir la apariencia/presentación de una página web (CSS) o su funcionalidad (JavaScript)</p>
          <p>HTML le da "valor añadido" a un texto estándar en español. Hiper Texto se refiere a enlaces que conectan una página Web con otra, ya sea dentro de una página web o entre diferentes sitios web. los vínculos son un aspecto fundamental de la Web. Al subir contenido a Internet y vincularlo a páginas de otras personas, te haces participante activo de esta Red Mundial.</p>
          <p>HTML usa "markup" o marcado para anotar textos, imágenes, y otros contenidos que se muestran en el Navegador Web. El lenguaje de marcado HTML incluye "elementos" especiales tales como <head>, <title>, <body>, <header>, <article>, <section>, <p>, <div>, <span>, <img>, y muchos otros más.</p>
          <p>Durante el desarrollo de esta unidad se enseñará HTML 5 que es la última versión de HTML y es un estándar web.</p>
          <h2>Estructura HTML</h2>
          <p>En HTML5 destaca sobretodo la simplicidad y la permisividad.</p>
          <img src="https://i.ibb.co/svfVZmp/image.png" alt="estructura HTML5">
            <button id="btn-go-html" class="btns-home font-bio" type="button">Ir a Test HTML5</button>
        </div>`;
  sectionElem.setAttribute('id', 'content-html');
  sectionElem.innerHTML = sectionContent;
  document.getElementById('advertising').innerHTML = '';
  const btnGoTestHtml = sectionElem.querySelector('#btn-go-html');
  btnGoTestHtml.addEventListener('click',  () => {
    window.location.hash = '#/test';
  });
  return sectionElem;
};