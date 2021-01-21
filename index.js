const renata = document.querySelector('#renata');
const erving = document.querySelector('#erving');
const daniel = document.querySelector('#daniel');
const staff = document.querySelector('#staff');
const aboutStaff = document.querySelector('#about-staff');

renata.addEventListener('click', () => {
  aboutStaff.innerHTML = `
  <div class="container p-5 bg-fundador  animate__animated animate__pulse">
    <p class="fs-23">
      REANATA SALAZAR <br />
      HOST
    </p>
    <p class="fs-19 text-white">
    Joven cancunense apasionada por la vida, y los viajes.
    Estudia comunicación, y le encanta ir a la playa, tener nuevas experiencias y conocer personas de todas partes del mundo.
    Su vibra extraordinaria y única contagia a cualquiera.
    Siempre sorprende con sus excelentes recomendaciones de la zona.
    </p>
  </div>
  `;
});

erving.addEventListener('click', () => {
  aboutStaff.innerHTML = `
  <div class="container p-5 bg-fundador  animate__animated animate__pulse">
    <p class="fs-23">
    ERVING CASTILLO <br />
    HOST
    </p>
    <p class="fs-19 text-white">
    Joven universitario originario de Cancún Q.Roo. Ama su país y la cultura que existe en él.
    Le encanta visitar lugares que lo hagan sentirse en contacto con la naturaleza.
    Cuenta con algunos años en el sector de hospitalidad, le encanta conocer gente y hacer nuevos amigos.
    Siempre tendrá la mejor disposición para ayudar y las mejores recomendaciones para brindarte una experiencia increíble.
    </p>
  </div>
  `;
});

daniel.addEventListener('click', () => {
  aboutStaff.innerHTML = `
  <div class="container p-5 bg-fundador  animate__animated animate__pulse">
  <p class="fs-23">
  DANIEL GARCÍA <br />
  FUNDADOR MI CASA ES TU CASA
  </p>
  <p class="fs-19 text-white">
  Un auténtico viajero del mundo, originario de Cancún, Q. Roo y orgullosamente mexicano. Apasionado por conocer nuevas culturas u por compartir la cultura mexicana. Sabe que el éxito se basa en los detalles y en la constancia, eso le permite brindar un servicio de alta calidad en todos los sentidos y dispuesto a hacer de tu viaje la mejor experiencia
  </p>
</div>
  `;
});

staff.addEventListener('click', () => {
  aboutStaff.innerHTML = `
  <div class="container p-5 bg-fundador  animate__animated animate__pulse">
  <p class="fs-23">
  HUBERTO GUERRA <br />
  HOST
  </p>
  <p class="fs-19 text-white">
  Beto, como prefiere que lo llamen, es una persona a la que le encanta conocer gente nueva, descubrir nuevas culturas y hacer buenos amigos.
  Tiene experiencia en hostelería y siempre ayudará a que nuestros huéspedes tengan una gran estadía y se sientan como en casa.
  Tiene claro lo que los huéspedes necesitan y hace todo lo posible por asegurarse de que lo reciban.
  
  </p>
</div>
  `;
});
