migrate((db) => {
  const collection = new Collection({
    "id": "wcoj48rg5qv5hif",
    "created": "2023-07-13 11:56:43.881Z",
    "updated": "2023-07-13 11:56:43.881Z",
    "name": "primaries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k77g6iz8",
        "name": "primary",
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
        "id": "fomsq4gy",
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
        "id": "xg6hmxqy",
        "name": "classification",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "cgl2dx7bxe9kd8q",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "classification"
          ]
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
  const collection = dao.findCollectionByNameOrId("wcoj48rg5qv5hif");

  return dao.deleteCollection(collection);
})
