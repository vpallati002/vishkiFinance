import { LookupService } from './lookup.service';
export declare class LookupController {
    private lookupService;
    constructor(lookupService: LookupService);
    get(): Promise<import("./models/lookup").Lookup>;
}
