migrate((db) => {
  const collection = new Collection({
    "id": "q53m2yobjv7w5l8",
    "created": "2023-07-13 11:59:17.646Z",
    "updated": "2023-07-13 11:59:17.646Z",
    "name": "primary_suppliers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ibizagpb",
        "name": "primary",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "wcoj48rg5qv5hif",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "primary"
          ]
        }
      },
      {
        "system": false,
        "id": "kqoivzfa",
        "name": "supplier",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "0o4kyw2qpolz2i7",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "supplier"
          ]
        }
      },
      {
        "system": false,
        "id": "v5ny6nhz",
        "name": "unit_price",
        "type": "number",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("q53m2yobjv7w5l8");

  return dao.deleteCollection(collection);
})
