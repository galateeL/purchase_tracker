const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  static table = "item";

  static table2 = "purchase";

  insert(item, image) {
    return this.connection.query(
      `insert into ${ItemManager.table} (name, description, image) values (?, ?, ?)`,
      [item.name, item.description, image]
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
}

module.exports = ItemManager;
