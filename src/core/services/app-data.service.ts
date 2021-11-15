import {Observable} from 'rxjs';
import {appAxios} from './app-axios.service';
import {ICurrency} from '../../common/common-models';
import {UIDataMaven} from '../../common/common-mavens';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

/**
 *  A Service that uses axios internally to fetch data
 *  from the API of this app
 */
export class AppDataService extends UIDataMaven
{

    subjOnCurrenciesChanged = new Subject<ICurrency[]>();

    /**
     * Fetches currencies from the REST API Serving this Application
     */
    getCurrencies(): Observable<ICurrency[]>
    {
        // the relative REST end point 'currencies' will be converted to
        // a full route /api/v1/currencies using the
        // apiBaseURL that will be passed in to the
        // constructor of AppDataService when
        // it is instantiated
       return this.get<ICurrency[]>('currencies').pipe(tap( data => {

           // alert all listners of the subject that data has been fetched
           this.subjOnCurrenciesChanged.next(data);

       }));
    }
}

// instantiate the app data service for use
// when fetching data from the node.js REST API that is serving this React App
export const appDataService = new AppDataService(appAxios, process.env.REACT_APP_API_BASE_URL as string);