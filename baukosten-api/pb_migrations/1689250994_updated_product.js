migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g77tkbap1qcu253")

  collection.name = "products"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g77tkbap1qcu253")

  collection.name = "product"

  return dao.saveCollection(collection)
})
