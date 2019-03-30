export default () => {
  const sectionElem = document.createElement('section');
  const sectionContent = `
  <h1>TEST HTML5</h1>
  <h2>1) Según lo leido anteriormente, ¿qué afirmaciones son correctas?</h2>
  <form class="resp">
      <label><input type="checkbox" id="answer1-1">La estructura doctype</label>
      <label><input type="checkbox" id="answer1-2">HTML5 es un lenguaje de programación</label>
      <label><input type="checkbox" id="answer1-3">HTML5 es la última versión de HTML</label>
      <label><input type="checkbox" id="answer1-4">HTML surge en el año 2010</label>
  </form>
  <h2>2) HTML5, ¿es un lenguaje de programación?</h2>
  <form class="resp">
      <label><input type="radio" id="answer2-1">Verdadero</label>
      <label><input type="radio" id="answer2-2">Falso</label>

  </form>
  <h2>3) Según lo leido anteriormente, ¿qué afirmación son correcta?</h2>
  <form class="resp">
      <label><input type="radio" id="answer3-1">Nav es una etiqueta HTML</label>
      <label><input type="radio" id="answer3-2">JS y HTML sirven para lo mismo</label>
      <label><input type="radio" id="answer3-3">CSS3 sustituye a HTML5</label>
      <label><input type="radio" id="answer3-4">la etiqueta center se utiliza en HTML5</label>
  </form>
  <a id="submit-test" href="resulEvaluationHTML.html">Enviar test</a>`;
  sectionElem.setAttribute('id', 'content-html');
  sectionElem.innerHTML = sectionContent;
  document.getElementById('advertising').innerHTML = '';
  const btnGoTestHtml = sectionElem.querySelector('#submit-test');
  btnGoTestHtml.addEventListener('click',  () => {
    // window.location.hash = '#/test';
    let resp = document.getElementsByClassName('resp');
    console.log('resp');
  });
  return sectionElem;
};
export const Capture = () => {
  let resp = document.getElementsByClassName('resp'),
      arrayGuardar = [];         
  for (let i = 0; i < resp.length; i++) {    
      arrayGuardar[i] = resp[i].value;
      console.log (resp[i].value);     
  }       
}