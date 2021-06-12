db = db.getSiblingDB('debugDB')
db.authCol.insert({"username": "username", "password": "password"});
db = db.getSiblingDB('productionDB')
db.authCol.insert({"username": "username", "password": "password"});