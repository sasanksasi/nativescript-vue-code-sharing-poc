import {
  switchMap,
  catchError,
  map
} from 'rxjs/operators';
import { of
} from 'rxjs';
import {
  fetchParsedExcel
} from '../../services/http-client';
import Axios from 'axios';
//import data from './test'

export default {
  domStreams: ["getTableData$"],
  subscriptions() {
    const monthlyMeterData$ = this.getTableData$.pipe(
      switchMap(() => {
        this.busy = true;
        this.monthlyMeterData = []
        console.log("fetching excel records")
        return fetchParsedExcel(10)
          .pipe(map(e => {
            this.monthlyMeterData = e;
            this.busy = false
          }), catchError(e => {
            console.log(e);
            this.busy = false
            return of([])
          }))
      })
    )
    return {
      monthlyMeterData$
    }
  },
  data() {
    return {
      title: 'Dashboard',
      excelButton: 'GET PARSED EXCEL DETAILS',
      monthlyMeterData: [],
      busy: false
    }
  },
  methods: {
    getMonthData(data, month) {
      var month = data.filter(e => e.month === month)[0];
      if (month)
        return month.count.toFixed(2);
      return 0;
    },
    getTotal(data) {
      var initialValue = 0;
      var sum = data.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.count;
      }, initialValue)
      return sum.toFixed(2);
    },
    onItemTap({
      item
    }) {
      console.log(`Tapped on ${item}`);
    }
  },
}