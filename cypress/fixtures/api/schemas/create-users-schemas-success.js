export const createUserSchemaSuccess = {
    "id": "/createUserSchemaSuccess",
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "job": {
            "type": "string"
        },
        "id": {
            "type": "string"
        },
        "createdAt": {
            "type": "string"
        }
    },
    "required": [
        "name",
        "job",
        "id",
        "createdAt"
    ]
}