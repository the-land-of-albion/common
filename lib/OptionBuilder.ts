import { Options, RequestKeys } from "./Options";
import fetch from "node-fetch";


export class OptionsBuilder{
    private headers?: Record<string,any>
    constructor(headers?){
        this.headers = headers || {
        "Authorization": "Bearer "+ "mypassword",
        "Content-Type":"application/json",
        "Accepts":"application/json",
        "credentials": "include",
        "User-Agent":"discord / node-fetch"
    }
    }
    withHeaders(headers: Record<string, any>){
        this.headers = {...this.headers, ...headers};
        return this;
    }
    fetch(url, req: RequestKeys, optionals?: {body?: any, headers?: Record<string, any>}){
        const usedHeaders = {...this.headers,...optionals?.headers }; 
        const builderOptionals = { body: optionals?.body, headers: usedHeaders}
        const options = new Options(req, builderOptionals).transform();
        return fetch(url, options);
    }
}

export default OptionsBuilder;
