const UsersValidations = (db, callback) => {
    db.createCollection("Users", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["role", "username", "email", "password"],
                properties: {
                    role: {
                        bsonType: "string",
                        description: "must be a string and is required"
                    },
                    username: {
                        bsonType: "string",
                        description: "must be a string and is required"
                    },
                    email: {
                        bsonType: "string",
                        description: "must be a string and is required"
                    },
                    password: {
                        bsonType: "string",
                        description: "must be a string and is required"
                    }
                }
            },
        }
    },
        function (err, result) {
            console.log("Users Collection created");
            callback(err, result);
        }
    )
};

module.exports = {
    UsersValidations
}