let location_input=""
const button = document.getElementById('btn');
const input = document.getElementById('input');

button.addEventListener('click', () => {
button.classList.add('hidden');
input.classList.add('active');
setTimeout(() => {
  input.focus();
}, 300); 
});

input.addEventListener('blur', () => {
if (input.value=="") {
  input.classList.remove('active');
  button.classList.remove('hidden');
}
else {
    input.classList.remove('active');
    button.classList.remove('hidden');
    alert(input.value);
    location_input=input.value;
    input.value='';
    
  }
});

function checkEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        input.classList.remove('active');
        button.classList.remove('hidden');
        location_input=input.value
        alert(location_input);
        input.value='';
        
    }
}
