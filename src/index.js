import { showAlert } from './messages';
import $ from 'jquery';
import { v4 } from 'uuid';
import moment from 'moment';
import _ from 'lodash';

import './styles.scss';

document.getElementById('btn-alert').addEventListener('click', showAlert) 

$('#btn-jq').click(()=> alert(v4()));

$('#btn-date').click(()=> alert(moment().format('LLLL')));

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], 'test');
  
    return element;
  };
  
  document.body.appendChild(component());

