migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7w4b2dwimjupcc")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7w4b2dwimjupcc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqadj84i",
    "name": "primary_id",
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
  }))

  return dao.saveCollection(collection)
})
