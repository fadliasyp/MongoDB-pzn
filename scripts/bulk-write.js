db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "eko",
                full_name: "Eko"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "kurniawan",
                full_name: "Kurniawan"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ["eko", "kurniawan", "khannedy"]
                }
            },
            update: {
                $set: {
                    full_name: "Eko Kurniawan Khannedy"
                }
            }
        }
    }
])

db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: 9,
                full_name: 'eko'
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: 10,
                full_name: 'kurniawan'
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: [9, 10]
                }
            },
            update: {
                $set: {
                    full_name: 'eko kurniawan khannedy'
                }
            }
        }
    }
])