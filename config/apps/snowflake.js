const { 
  snowAcctHost,
  snowUserAcctUser,
  snowAcctPass,
  snowflakeAppId,
  snowflakeWarehouseName,
  snowflakeDatabaseName,
  snowflakeSchemaName
} = require('../../getConfigInputs.js');

exports.default = async function buildConfig() {
  return [
    {
      class: "app",
      id: snowflakeAppId,
      name:  snowflakeAppId,
      type: "snowflake",
      options: {
        account: snowAcctHost,
        username: snowUserAcctUser,
        password: snowAcctPass ,
        warehouse: snowflakeWarehouseName, // The Snowflake warehouse to use - e.g. `warehouse: "COMPUTE_WH"`
        database: snowflakeDatabaseName, // The Snowflake database to use
        schema:  snowflakeSchemaName, // The Snowflake schema (default: PUBLIC)
      },
    },
  ];
};

