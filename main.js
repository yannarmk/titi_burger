const formEl = document.querySelector('#form')
const emailInputEl = document.querySelector('#email')
const remembermeInputEl = document.querySelector('#rememberme')
const numberRadioButtonEls = formEl.querySelectorAll('[name="number"]')



formEl.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(emailInputEl.value) 
    console.log(remembermeInputEl.checked) 
    let number = getCheckedValue(numberRadioButtonEls)
    console.log(numberRadioButtonEls)
    console.log('formElnumber:', formEl.number.value)
})

       

function getCheckedValue (RadioButtons){
    for(const radio of RadioButtons){
        if (radio.checked){
         return radio.value   
        }
}}