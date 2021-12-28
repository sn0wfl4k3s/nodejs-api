# Passos:
- Crie o arquivo .sequelizerc
- yarn sequelize-cli init
- yarn sequelize-cli model:generate --name user --attributes name:string,email:string --underscored true
- Confira e edite as migrations como desejar  
- yarn sequelize-cli db:migrate 

# Comandos úteis:

## principais:
yarn add sequelize-cli -D \
yarn sequelize-cli init \
yarn sequelize-cli model:generate --name user --attributes name:string,email:string --underscored true  \
yarn sequelize-cli db:migrate 

## secundários
yarn sequelize-cli db:migrate:undo  \
yarn sequelize-cli db:migrate:undo:all -to XXXXXXX-create-posts.js  \
yarn sequelize-cli db:seed:all  \
yarn sequelize-cli db:seed:undo \
yarn sequelize-cli seed:generate --name demo-user \
yarn sequelize-cli migration:create --name "migration name" 


# Datatypes:
https://sequelize.org/v3/api/datatypes/

STRING, CHAR, TEXT,

INTEGER, BIGINT, FLOAT, REAL, DOUBLE, DECIMAL, 

BOOLEAN, 

TIME, DATE, DATEONLY, NOW, 

BLOB, UUID, ENUM, ARRAY, GEOMETRY, 