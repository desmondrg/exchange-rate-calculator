import {Axios} from 'axios';
import {from, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

/**
 * The Precursor Class for a Service
 */
export class Maven
{
   public isProcessing = false;
}

/**
 * The precursor class for all services that
 * fetch data from a REST API
 */
export class UIDataMaven extends Maven
{

    constructor(public axios: Axios,
                public apiBaseUrl: string)
    {
        super();
    }

    /**
     * probes a url to determine if it is a full url (i.e contains http or https)
     * @param url the string to probe for the presence of 'http' or 'https'
     */
    isAbsoluteUrl(url: string)
    {
        if(!url)
        {
            return url;
        }
        return url?.includes('http');
    }

    /**
     * Converts a relative url into a full url using the apiBaseUrl that
     * was passed into the constructor of this Service
     */
    getFullUrl(url: string)
    {
        if(this.isAbsoluteUrl(url))
        {
            return url;
        }

        return `${this.apiBaseUrl}/${url}`
    }

    /**
     * Deletes data from an API
     * @param url the relative / absolute url to fetch data from
     */
    delete(url: string): Observable<any>
    {
        url = this.getFullUrl(url);

        this.isProcessing = true;

        return from(this.axios.delete(url))
            .pipe(map(x => {
                // get data from axios so final caller doesn't have to access results via the .data property
                return x?.data ?? x;
            }))
            .pipe(tap(x => {
            this.isProcessing = false;
        }));
    }

    /**
     * Fetches data from an API
     * @param url the relative / absolute url to fetch data from
     */
    get<T>(url: string): Observable<T>
    {
        url = this.getFullUrl(url);

        this.isProcessing = true;

        return from(this.axios.get(url))
            .pipe(map(x => {
                // get data from axios so final caller doesn't have to access results via the .data property
                return x?.data ?? x;
            }))
            .pipe(tap(x => {
                this.isProcessing = false;
            }));
    }


    /**
     * Posts Data to an api
     * @param url the relative / absolute url to fetch data from
     * @param body
     * @param options
     */
    post(url: string, body?: any, options?: { headers?: { [p: string]: string | string[] } }): Observable<any>
    {
        url = this.getFullUrl(url);

        this.isProcessing = true;

        return from(this.axios.post(url, body))
            .pipe(map(x => {
                // get data from axios so final caller doesn't have to access results via the .data property
                return x?.data ?? x;
            }))
            .pipe(tap(x => {
                this.isProcessing = false;
            }));
    }

    /**
     *
     * @param url the relative / absolute url to fetch data from
     * @param body an object to send to the server
     */
    put(url: string, body?: any): Observable<any>
    {
        url = this.getFullUrl(url);

        this.isProcessing = true;

        return from(this.axios.put(url, body))
            .pipe(map(x => {
                // get data from axios so final caller doesn't have to access results via the .data property
                return x?.data ?? x;
            }))
            .pipe(tap(x => {
                this.isProcessing = false;
            }));
    }
}
