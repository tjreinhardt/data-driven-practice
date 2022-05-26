npm install express pug
npm install nodemon --save-dev
npm install morgan



how to start via bin

type into terminal:
chmod +x bin/www     OR     bin/www


npm install per-env
npm install dotenv dotenv-cli --save-dev


npm install sequelize@^5.0.0 pg@^8.0.0
npm install sequelize-cli@^5.0.0 --save-dev

// after creating .sequelizerc file
npx sequelize init

npx sequelize model:generate --name Book --attributes "title:string, author:string, releaseDate:dateonly, pageCount:integer, publisher:string"

npx dotenv sequelize db:migrate
npx sequelize seed:generate --name test-data

confirm that we are logged into the correct database and use: \d "Books" to confirm
in psql

npx dotenv sequelize db:seed:all

to confirm the seeding, log into psql and run: select * from "Books";


npm install csurf@^1.0.0
npm install cookie-parser@^1.0.0

npm install express-validator@^6.0.0
