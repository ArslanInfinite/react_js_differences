const button = document.querySelector('button');

let modal;

button.addEventListener('click', showModalHandler);

function showModalHandler(){
  if (modal) {
    return;
  }
}