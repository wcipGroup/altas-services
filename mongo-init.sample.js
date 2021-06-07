use debugDB;

db.authCol.insert(
    {
        "username": "username", 
        "password": "password"
    }
);

use productionDB;

db.authCol.insert(
    {
        "username": "username", 
        "password": "password"
    }
);
