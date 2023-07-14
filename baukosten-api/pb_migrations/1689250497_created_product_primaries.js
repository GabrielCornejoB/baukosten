migrate((db) => {
  const collection = new Collection({
    "id": "v7w4b2dwimjupcc",
    "created": "2023-07-13 12:14:57.734Z",
    "updated": "2023-07-13 12:14:57.734Z",
    "name": "product_primaries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fthuilv2",
        "name": "product",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "g77tkbap1qcu253",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "product"
          ]
        }
      },
      {
        "system": false,
        "id": "bqadj84i",
        "name": "primary",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "wcoj48rg5qv5hif",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "primary"
          ]
        }
      },
      {
        "system": false,
        "id": "qrrwvvzj",
        "name": "usage",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "hxfnydxd",
        "name": "waste",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v7w4b2dwimjupcc");

  return dao.deleteCollection(collection);
})
