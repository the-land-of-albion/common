enum Requests {
    GET, POST, PUT, PATCH, DELETE
}

export type RequestKeys = keyof typeof Requests;
export class Options {
    method: RequestKeys;
    body?: any;
    headers?: any;
    static fallbackOptions = {
        "Authorization": "Bearer "+ "mypassword",
        "Content-Type":"application/json",
        "Accepts":"application/json",
        "credentials": "include",
        "User-Agent":"discord / node-fetch"
    }
    constructor(request: RequestKeys, optionals?: {body?: any, headers?: any}){
        this.method= request;
        if(optionals?.body) this.body = optionals.body;
        if(optionals?.headers) this.headers = optionals.headers;
    }
    transform() {
        if(this.body){
            return {
                method: this.method,
                body: JSON.stringify(this.body),
                headers: this.headers
            }
        }
        else {
            return {
                method: this.method,
                headers: this.headers
            }
        }
    }
} 

export default Options;