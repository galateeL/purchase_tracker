const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  static table = "item";

  insert(item) {
    return this.connection.query(
      `insert into ${ItemManager.table} (name, description, image) values (?, ?, ?)`,
      [item.name, item.description, item.image]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ItemManager.table} set name = ? where id = ?`,
      [item.name, item.id]
    );
  }

  findAllItems() {
    return this.connection.query(
      `SELECT item.id, item.name, item.description, item.image FROM ${ItemManager.table}`
    );
  }

  findItem(id) {
    return this.connection.query(
      `SELECT item.id, item.name, item.description, item.image, purchase.id, purchase.date, price 
      FROM ${ItemManager.table}
      INNER JOIN purchase ON item.id = purchase.item_id
      WHERE item.id = ?`,
      [id]
    );
  }
}

module.exports = ItemManager;
