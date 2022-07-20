import { HttpResponseStatusEnum } from "../enums/Http-response-status-enum";
export declare class HttpResponse {
    constructor(code: HttpResponseStatusEnum, message: string, model?: object);
    statusCode: HttpResponseStatusEnum;
    message: string;
    model: object | undefined;
}
