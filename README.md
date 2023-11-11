| **Type**                | **Name**       | **Description**                                                     | **Example**                                                                    |
| ----------------------- | -------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Query Operators**     | `$eq`          | Matches values equal to a specified value                           | `{ field: { $eq: value } }`                                                    |
| **Query Operators**     | `$ne`          | Matches values not equal to a specified value                       | `{ field: { $ne: value } }`                                                    |
| **Query Operators**     | `$gt`          | Matches values greater than a specified value                       | `{ field: { $gt: value } }`                                                    |
| **Query Operators**     | `$lt`          | Matches values less than a specified value                          | `{ field: { $lt: value } }`                                                    |
| **Query Operators**     | `$gte`         | Matches values greater than or equal to a specified value           | `{ field: { $gte: value } }`                                                   |
| **Query Operators**     | `$lte`         | Matches values less than or equal to a specified value              | `{ field: { $lte: value } }`                                                   |
| **Query Operators**     | `$and`         | Joins query clauses with a logical AND                              | `{ $and: [ { field1: value1 }, { field2: value2 } ] }`                         |
| **Query Operators**     | `$or`          | Joins query clauses with a logical OR                               | `{ $or: [ { field1: value1 }, { field2: value2 } ] }`                          |
| **Query Operators**     | `$not`         | Inverts the effect of a query expression                            | `{ field: { $not: { $eq: value } } }`                                          |
| **Query Operators**     | `$nor`         | Joins query clauses with a logical NOR                              | `{ $nor: [ { field1: value1 }, { field2: value2 } ] }`                         |
| **Query Operators**     | `$exists`      | Matches documents that have the specified field                     | `{ field: { $exists: true } }`                                                 |
| **Query Operators**     | `$type`        | Matches documents where the value has a specified BSON data type    | `{ field: { $type: "string" } }`                                               |
| **Query Operators**     | `$in`          | Matches any of the values specified in an array                     | `{ field: { $in: [value1, value2] } }`                                         |
| **Query Operators**     | `$nin`         | Matches none of the values specified in an array                    | `{ field: { $nin: [value1, value2] } }`                                        |
| **Query Operators**     | `$regex`       | Provides regular expression pattern matching                        | `{ field: { $regex: /pattern/ } }`                                             |
| **Query Operators**     | `$elemMatch`   | Matches documents with an array field meeting specified criteria    | `{ field: { $elemMatch: { nestedField: value } } }`                            |
| **Query Operators**     | `$expr`        | Allows the use of aggregation expressions within the query language | `{ $expr: { $gte: ["$field1", "$field2"] } }`                                  |
| **Methods**             | `find()`       | Retrieves documents from a collection                               | `db.collection.find({ field: value })`                                         |
| **Methods**             | `findOne()`    | Retrieves a single document from a collection                       | `db.collection.findOne({ field: value })`                                      |
| **Methods**             | `insertOne()`  | Inserts a single document into a collection                         | `db.collection.insertOne({ field: value })`                                    |
| **Methods**             | `insertMany()` | Inserts multiple documents into a collection                        | `db.collection.insertMany([{ field1: value1 }, { field2: value2 }])`           |
| **Methods**             | `updateOne()`  | Updates a single document in a collection                           | `db.collection.updateOne({ field: value }, { $set: { newField: newValue } })`  |
| **Methods**             | `updateMany()` | Updates multiple documents in a collection                          | `db.collection.updateMany({ field: value }, { $set: { newField: newValue } })` |
| **Methods**             | `deleteOne()`  | Deletes a single document from a collection                         | `db.collection.deleteOne({ field: value })`                                    |
| **Methods**             | `deleteMany()` | Deletes multiple documents from a collection                        | `db.collection.deleteMany({ field: value })`                                   |
| **Aggregation Methods** | `aggregate()`  | Performs aggregation operations on the data                         | `db.collection.aggregate([{ $group: { _id: "$field", total: { $sum: 1 } } }])` |
