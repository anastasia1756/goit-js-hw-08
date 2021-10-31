import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const inputData = {};

initialForm();

feedbackForm.addEventListener('input', throttle(onInputChange, 500));

function onInputChange (event) {
    inputData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(inputData));
    
}

function initialForm () {
let persistedInput = localStorage.getItem("feedback-form-state");
if(persistedInput) {
    let parsedInput = JSON.parse(persistedInput);
    Object.entries(parsedInput).forEach(([name, value]) => {feedbackForm.elements[name].value = value}); 
}

}

feedbackForm.addEventListener('submit', onSubmit);

function onSubmit (event) {
    event.preventDefault();
    const formData = new FormData(feedbackForm);
    // formData.forEach();
    let persistedInput = localStorage.getItem("feedback-form-state");
if(persistedInput) {
    let parsedInput = JSON.parse(persistedInput);
    console.log(parsedInput);
};
    localStorage.removeItem("feedback-form-state");  
    event.currentTarget.reset();

}

