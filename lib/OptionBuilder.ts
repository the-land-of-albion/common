import { Options, RequestKeys } from "./Options";
import nodeFetch from "node-fetch";

export class OptionsBuilder{
    private headers: Record<string,any>
    constructor(){
        this.headers = {
        "Authorization": "Bearer "+ "mypassword",
        "Content-Type":"application/json",
        "Accepts":"application/json",
        "credentials": "include",
        "User-Agent":"discord / node-fetch"
    }
    this.fetch = this.fetch.bind(this);
    }
    withHeaders(headers: Record<string, any>){
        this.headers = {...this.headers, ...headers};
        return this;
    }
    fetch(url, req: RequestKeys, optionals?: {body?: any, headers?: Record<string, any>}): Promise<any>{
        const usedHeaders = {...this.headers,...optionals?.headers }; 
        // console.log("usedHeaders:",usedHeaders)
        const builderOptionals = { body: optionals?.body, headers: usedHeaders}
        // console.log("builderOptionals",builderOptionals);
        const options = new Options(req, builderOptionals).transform();
        // console.log("options",options);
        return nodeFetch(url, options) as Promise<any>;
    }
}

export default OptionsBuilder;
