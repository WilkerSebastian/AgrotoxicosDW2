import {Pool} from 'pg';

export const pool = new Pool({
    connectionString: process.env.URL,
    ssl:{

        requestCert: true,
        rejectUnauthorized:false

    }
});