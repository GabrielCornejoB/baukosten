migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jli8lpt8rsedr6r")

  collection.options = {
    "query": "SELECT id, product, unit FROM products;"
  }

  // remove
  collection.schema.removeField("n6vnpyss")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mg60yjne",
    "name": "product",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6coxa5e9",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jli8lpt8rsedr6r")

  collection.options = {
    "query": "SELECT id, product FROM products;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n6vnpyss",
    "name": "product",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("mg60yjne")

  // remove
  collection.schema.removeField("6coxa5e9")

  return dao.saveCollection(collection)
})
