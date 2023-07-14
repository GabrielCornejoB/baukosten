migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q53m2yobjv7w5l8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ibizagpb",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kqoivzfa",
    "name": "supplier",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "0o4kyw2qpolz2i7",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "supplier"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q53m2yobjv7w5l8")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
