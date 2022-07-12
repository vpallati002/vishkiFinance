import { HttpResponseStatusEnum } from "../enums/Http-response-status-enum";

export class HttpResponse{
    
    constructor(code:HttpResponseStatusEnum, message:string, model?:object){
        this.statusCode = code;
        this.message = message;
        this.model = model;
    }

 statusCode: HttpResponseStatusEnum;
 message: string;
 model: object | undefined;
} 