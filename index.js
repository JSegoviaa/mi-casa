const renata = document.querySelector('#renata');
const erving = document.querySelector('#erving');
const daniel = document.querySelector('#daniel');
const staff = document.querySelector('#staff');
const aboutStaff = document.querySelector('#about-staff');

renata.addEventListener('click', () => {
  aboutStaff.innerHTML = `
<div class="overflow-hidden bg-fundador">
<div class="container p-5 overflow-hidden">
<p class="fs-23">
RENATA SALAZAR <br />
HOST
</p>
<p class="fs-19 text-white">
Joven cancunense apasionada por la vida, y los viajes. Estudia comunicación, y le encanta ir a la playa, tener nuevas experiencias y conocer personas de todas partes del mundo. Su vibra extraordinaria y única contagia a cualquiera. Siempre sorprende con sus excelentes recomendaciones de la zona.
</p>
</div>
<div class="d-flex justify-content-end position-relative">
<img
class="isotopo-staff position-absolute"
src="./assets/Generales/isotipo-micasa.svg"
alt="mi casa"
/>
</div>
</div>
  `;

  renata.innerHTML = `
  <div class="renata-2 fs-27 text-white  d-flex align-items-center justify-content-center poppins">
  
  <div class="text-center">
  <p>RENATA,</p>
  <p> HOST
  </p>
  
  </div>
  </div>
  
  `;
});

erving.addEventListener('click', () => {
  aboutStaff.innerHTML = `
<div class="overflow-hidden bg-fundador">
<div class="container p-5 overflow-hidden">
<p class="fs-23">
ERVING CASTILLO  <br />
HOST
</p>
<p class="fs-19 text-white">
Joven universitario originario de Cancún Q.Roo. Ama su país y la cultura que existe en él. Le encanta visitar lugares que lo hagan sentirse en contacto con la naturaleza. Cuenta con algunos años en el sector de hospitalidad, le encanta conocer gente y hacer nuevos amigos. Siempre tendrá la mejor disposición para ayudar y las mejores recomendaciones para brindarte una experiencia increíble.
</p>
</div>
<div class="d-flex justify-content-end position-relative">
<img
class="isotopo-staff position-absolute"
src="./assets/Generales/isotipo-micasa.svg"
alt="mi casa"
/>
</div>
</div>
  `;

  erving.innerHTML = `
  <div class="erving-2 fs-27 text-white  d-flex align-items-center justify-content-center poppins">
  
  <div class="text-center">
  <p>ERVING,</p>
  <p> HOST
  </p>
  
  </div>
  </div>
    
    `;
});

daniel.addEventListener('click', () => {
  aboutStaff.innerHTML = `
<div class="overflow-hidden bg-fundador">
<div class="container p-5 overflow-hidden">
<p class="fs-23">
DANIEL GARCÍA <br />
FUNDADOR MI CASA ES TU CASA
</p>
<p class="fs-19 text-white">
Un auténtico viajero del mundo, originario de Cancún, Q. Roo y
orgullosamente mexicano. Apasionado por conocer nuevas culturas u
por compartir la cultura mexicana. Sabe que el éxito se basa en
los detalles y en la constancia, eso le permite brindar un
servicio de alta calidad en todos los sentidos y dispuesto a hacer
de tu viaje la mejor experiencia
</p>
</div>
<div class="d-flex justify-content-end position-relative">
<img
class="isotopo-staff position-absolute"
src="./assets/Generales/isotipo-micasa.svg"
alt="mi casa"
/>
</div>
</div>
  `;

  daniel.innerHTML = `
  <div class="daniel-2 fs-27 text-white  d-flex align-items-center justify-content-center poppins">
  
  <div class="text-center">
  <p>DANIEL,</p>
  <p> FUNDADOR
  </p>
  <img src="./assets/íconos SVG/add.svg" class="add" alt="daniel"
  </div>
  </div>
  `;
});

staff.addEventListener('click', () => {
  aboutStaff.innerHTML = `
<div class="overflow-hidden bg-fundador">
<div class="container p-5 overflow-hidden">
<p class="fs-23">
HUMBERTO GUERRA <br />
HOST
</p>
<p class="fs-19 text-white">
Beto, como prefiere que lo llamen, es una persona a la que le encanta conocer gente nueva, descubrir nuevas culturas y hacer buenos amigos. Tiene experiencia en hostelería y siempre ayudará a que nuestros huéspedes tengan una gran estadía y se sientan como en casa. Tiene claro lo que los huéspedes necesitan y hace todo lo posible por asegurarse de que lo reciban.
</p>
</div>
<div class="d-flex justify-content-end position-relative">
<img
class="isotopo-staff position-absolute"
src="./assets/Generales/isotipo-micasa.svg"
alt="mi casa"
/>
</div>
</div>
  `;

  staff.innerHTML = `
  <div class="humberto-2 fs-27 text-white  d-flex align-items-center justify-content-center poppins">
  
  <div class="text-center">
  <p>HUMBERTO,</p>
  <p> HOST
  </p>
  
  </div>
  </div>
  `;
});
