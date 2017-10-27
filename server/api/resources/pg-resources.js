import { Pool } from "pg";

export default function(app) {
    const pool = new Pool({
        host: app.get("PG_HOST"),
        user: app.get("PG_USER"),
        password: app.get("PG_PASSWORD"),
        database: app.get("PG_DATABASE"),
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000
    });

    return {
        getItems() {
            return pool.query("SELECT * FROM items").then( res => res.rows );
        }
    };
}

