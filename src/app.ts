require('dotenv').config({ debug: true });
const env = process.env;
console.log(env.SERVER_PORT);
console.log(env.FILE_DIRECTORY_PATH);

import server from './server';

const port = parseInt(process.env.SERVER_PORT || '5000');

const starter = new server(env.SERVER_PORT,
                         env.FILE_DIRECTORY_PATH,
                         env.KEYCLOAK_ADMIN_URL,
                         env.KEYCLOAK_LOGOUT_URL).start(port)
  .then(port => console.log(`Running on port ${port}`))
  .catch(error => {
    console.log(error)
  });

export default starter;