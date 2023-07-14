migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jli8lpt8rsedr6r");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "jli8lpt8rsedr6r",
    "created": "2023-07-13 23:11:45.688Z",
    "updated": "2023-07-13 23:16:54.150Z",
    "name": "products_view",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "c76vqjrz",
        "name": "product",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "khdptpgr",
        "name": "unit",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "mgjstxqeamz5kj3",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "unit"
          ]
        }
      },
      {
        "system": false,
        "id": "vqqfosqs",
        "name": "count",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
      "query": "SELECT p.id, p.product, p.unit, COUNT(ps.id) as count\nFROM products p\nJOIN product_primaries ps ON p.id = ps.product\n;"
    }
  });

  return Dao(db).saveCollection(collection);
})
