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
    getSingleItem(id) {
      return pool.query(`SELECT * FROM items WHERE id='${id}'`).then(res => {
        return res.rows;
      });
    },
    getItems() {
      return pool.query("SELECT * FROM items").then(res => res.rows);
    },
    getUserBorrowedItems(id) {
      return pool
        .query(`SELECT * FROM items WHERE borrower='${id}'`)
        .then(res => {
          console.log("borrowedItems", res.rows);
          return res.rows;
        });
    },
    getUserOwnedItems(id) {
      return pool
        .query(`SELECT * FROM items WHERE itemowner='${id}'`)
        .then(res => res.rows);
    },
    getTags() {
      return pool.query("SELECT * FROM tags").then(res => res.rows);
    },
    getTag(id) {
      return pool
        .query(
          `SELECT tags.tagsid, tags.title FROM tags JOIN itemtags on tags.tagsid = itemtags.tagid WHERE itemtags.itemid = ${
            id
          }`
        )
        .then(res => res.rows);
    }
  };
}
