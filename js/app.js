'use strict'
const inpId = document.getElementById('inp-id')
const inpPassw = document.getElementById('inp-passw')
const btn = document.getElementById('btn')
const forms = document.querySelectorAll('#form')
const noneBe1 = document.querySelector('.none_1')
const noneBe2 = document.querySelector('.none_2')

//regEX
// const regEX_id = /^[0-9]{12}$/
// const regEX_passw = /^[a-zA-Z0-9]{6,12}$/


function name() {

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
        noneBe1.classList.add('d-none')
        noneBe2.classList.add('d-none')

      }, false)
    })
}
name()



// let yoqQil = (e) => {
//   if (forms.classList.value == 'was-validated') {
//     console.log('Hello');
//   })
// }
  
// noneBe1.classList.add('d-none')

















