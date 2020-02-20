import { showAlert } from './js/messages';
import './js/module-a';
import './js/module-b';
import _ from 'lodash';
import '../css/main.scss';
import Icon from '../assets/icon.png';
import Work from '../assets/work.jpg';

document.getElementById('btn-alert').addEventListener('click', showAlert) 

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');
    element.classList.add('test');
    
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    const myWork = new Image();
    myWork.src = Work;

    element.appendChild(myWork);

    return element;
  };
  
  document.body.appendChild(component());

  function component2() {
    const element = document.createElement('div');
  
    element.classList.add('test');
    
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    const myWork = new Image();
    myWork.src = Work;

    element.appendChild(myWork);

    return element;
  };
  
  document.body.appendChild(component2());





