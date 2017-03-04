import {credentials} from '../credentials/credentials';

export class setupRequest {
    /**
     *
     */
    constructor(obj) {
        this.language = obj.language;
        this.theme = obj.theme;
        this.database = obj.database;
        this.credentials = obj.credentials;
    }
    public theme: string;
    public language: string;
    public database: any;
    public credentials: credentials;
}