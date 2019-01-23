import {
    ajax
} from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const url = 'https://84348e6e.ngrok.io/api';


const fetchParsedExcel = (limit) => ajax.getJSON(`${url}/meter-data/excel`);


export {
    fetchParsedExcel
}