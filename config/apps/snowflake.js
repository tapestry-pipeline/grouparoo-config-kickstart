
const {snowflakeAppId, snowflakeWarehouseName, snowflakeDatabaseName,   
  snowflakeSchemaName} = require('../../constants.js');



exports.default = async function buildConfig() {
  const account = process.env.SNOW_HOSTNAME
  const username = process.env.SNOW_ACCOUNT_USERNAME
  const password = process.env.SNOW_ACCOUNT_PASSWORD
  return [
    {
      class: "App",
      id: snowflakeAppId,
      name: snowflakeAppId,
      type: "snowflake",
      options: {
        account: account,
        username: username, // Snowflake user login name to connect with
        password: password, // Password for the given username
        warehouse: snowflakeWarehouseName, // The Snowflake warehouse to use - e.g. `warehouse: "COMPUTE_WH"`
        database:  snowflakeDatabaseName, // The Snowflake database to use
        schema:  snowflakeSchemaName, // The Snowflake schema (default: PUBLIC)
      },
    },
  ];
}
