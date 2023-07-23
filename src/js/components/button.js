
import style from './../../css/index.css';

const button2 = document.createElement('button');

button2.innerHTML = 'Clear Button';
/*button2.classList.add([style.button]);*/
button2.classList.add(['button']);
button2.onclick = function () {
  alert('clear button clicked');
};
document.body.appendChild(button2);