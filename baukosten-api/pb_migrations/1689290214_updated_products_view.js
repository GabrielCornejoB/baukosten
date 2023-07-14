migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jli8lpt8rsedr6r")

  collection.options = {
    "query": "SELECT p.id, p.product, p.unit, COUNT(ps.id) as count\nFROM products p\nJOIN product_primaries ps ON p.id = ps.product\n;"
  }

  // remove
  collection.schema.removeField("y9wbbcji")

  // remove
  collection.schema.removeField("kwuubb9p")

  // remove
  collection.schema.removeField("xfxfivbs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c76vqjrz",
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
    "id": "khdptpgr",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vqqfosqs",
    "name": "count",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jli8lpt8rsedr6r")

  collection.options = {
    "query": "SELECT p.id, p.product, p.unit, COUNT(ps.id) as count\nFROM products p\nJOIN product_primaries ps ON p.id = ps.id\n;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y9wbbcji",
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
    "id": "kwuubb9p",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xfxfivbs",
    "name": "count",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("c76vqjrz")

  // remove
  collection.schema.removeField("khdptpgr")

  // remove
  collection.schema.removeField("vqqfosqs")

  return dao.saveCollection(collection)
})
