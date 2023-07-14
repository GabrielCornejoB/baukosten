migrate((db) => {
  const collection = new Collection({
    "id": "0o4kyw2qpolz2i7",
    "created": "2023-07-13 11:57:14.524Z",
    "updated": "2023-07-13 11:57:14.524Z",
    "name": "suppliers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kbciunpp",
        "name": "supplier",
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
  const collection = dao.findCollectionByNameOrId("0o4kyw2qpolz2i7");

  return dao.deleteCollection(collection);
})
