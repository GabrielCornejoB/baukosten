migrate((db) => {
  const collection = new Collection({
    "id": "g77tkbap1qcu253",
    "created": "2023-07-13 12:12:38.142Z",
    "updated": "2023-07-13 12:12:38.142Z",
    "name": "product",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jck5ga3l",
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
        "id": "yx6jfyos",
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
  const collection = dao.findCollectionByNameOrId("g77tkbap1qcu253");

  return dao.deleteCollection(collection);
})
