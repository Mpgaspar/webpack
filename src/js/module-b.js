import $ from 'jquery';
import { v4 } from 'uuid';
import moment from 'moment';

$('#btn-jq').click(()=> alert(v4()));

$('#btn-date').click(()=> alert(moment().format('LLLL')));