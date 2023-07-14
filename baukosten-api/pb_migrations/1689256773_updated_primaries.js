migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcoj48rg5qv5hif")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2x1b9qvn",
    "name": "default_primary_supplier",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "q53m2yobjv7w5l8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "supplier",
        "unit_price"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wcoj48rg5qv5hif")

  // remove
  collection.schema.removeField("2x1b9qvn")

  return dao.saveCollection(collection)
})
