migrate((db) => {
  const collection = new Collection({
    "id": "cgl2dx7bxe9kd8q",
    "created": "2023-07-13 11:20:30.921Z",
    "updated": "2023-07-13 11:20:30.921Z",
    "name": "classifications",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eneqk4wr",
        "name": "classification",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cgl2dx7bxe9kd8q");

  return dao.deleteCollection(collection);
})
