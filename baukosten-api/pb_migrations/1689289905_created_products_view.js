migrate((db) => {
  const collection = new Collection({
    "id": "jli8lpt8rsedr6r",
    "created": "2023-07-13 23:11:45.688Z",
    "updated": "2023-07-13 23:11:45.688Z",
    "name": "products_view",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "n6vnpyss",
        "name": "product",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id, product FROM products;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jli8lpt8rsedr6r");

  return dao.deleteCollection(collection);
})
