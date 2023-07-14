migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("582mcg1tfncl7k0");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "582mcg1tfncl7k0",
    "created": "2023-07-13 12:23:37.093Z",
    "updated": "2023-07-13 12:23:37.093Z",
    "name": "adasd",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id from products;"
    }
  });

  return Dao(db).saveCollection(collection);
})
