const AbstractManager = require("./AbstractManager");

class PurchaseManager extends AbstractManager {
  static table = "purchase";

  insert(purchase, itemId) {
    return this.connection.query(
      `insert into ${PurchaseManager.table} (date, price, item_id) values ( ?, ?, ?)`,
      [purchase.date, purchase.price, itemId]
    );
  }

  findPurchasesByItem(id) {
    return this.connection.query(
      `SELECT price, date FROM ${PurchaseManager.table} WHERE item_id = ? ORDER BY date ASC`,
      [id]
    );
  }
}

module.exports = PurchaseManager;
