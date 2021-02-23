import { Options, RequestKeys } from "./Options";
import fetch from "node-fetch";


export class OptionsBuilder{
    private headers?: Record<string,any>
    constructor(headers){
        this.headers = headers || {}
    }
    withHeaders(headers: Record<string, any>){
        this.headers = headers;
        return this;
    }
    build(url, req: RequestKeys, optionals?: {body?: any, headers?: Record<string, any>}){
        const usedHeaders = {...this.headers,...optionals?.headers }; 
        const builderOptionals = { optionals: optionals?.body, headers: usedHeaders}
        return fetch(url, new Options(req, builderOptionals));
    }
}

export default OptionsBuilder;