const renata = document.querySelector('#renata');
const erving = document.querySelector('#erving');
const daniel = document.querySelector('#daniel');
const staff = document.querySelector('#staff');

renata.addEventListener('click', () => {
  renata.innerHTML = `   
    <div class="d-flex justify-content-center align-items-center renata">
        <div class="text-center">
            <p class="text-white poppins text-center fs-27">Renata Salazar, 
            <br/> 
            Host 
            </p>
        </div>
    </div>
  `;
});

erving.addEventListener('click', () => {
  erving.innerHTML = `
    <div class="d-flex justify-content-center align-items-center erving">
        <div class="text-center">
            <p class="text-white poppins text-center fs-27">Erving Castillo, 
            <br/> 
            Host </p>
        </div>
    </div>
  `;
});

daniel.addEventListener('click', () => {
  daniel.innerHTML = `
    <div class="d-flex justify-content-center align-items-center daniel">
        <div class="text-center">
            <p class="text-white poppins text-center fs-27">Daniel, 
            <br/> 
            Fundador </p>
            <img class="footer-redes" src="./assets/íconos SVG/add.svg" alt="">
        </div>
    </div>
  `;
});

staff.addEventListener('click', () => {
  staff.innerHTML = `
    <div class="d-flex justify-content-center align-items-center humberto">
        <div class="text-center">
            <p class="text-white poppins text-center fs-27">Humberto Guerra, 
            <br/> 
            Host </p>
        </div>
    </div>
  `;
});

// <img
// class="staff-img mt-5 pointer"
// src="./assets/About/daniel-2.jpg"
// alt="renata"
// />
