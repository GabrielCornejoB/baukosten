migrate((db) => {
  const collection = new Collection({
    "id": "mgjstxqeamz5kj3",
    "created": "2023-07-13 11:20:03.577Z",
    "updated": "2023-07-13 11:20:03.577Z",
    "name": "units",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vuhnapzl",
        "name": "unit",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mgjstxqeamz5kj3");

  return dao.deleteCollection(collection);
})
