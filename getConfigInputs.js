const { execSync } = require('child_process');

// const snowAcctHost = JSON.parse(execSync('aws ssm get-parameter --name "/snowflake/acct-hostname" --with-decryption').toString()).Parameter.Value;
// const snowUserAcctUser = JSON.parse(execSync('aws ssm get-parameter --name "/snowflake/acct-username" --with-decryption').toString()).Parameter.Value;
// const snowAcctPass = JSON.parse(execSync('aws ssm get-parameter --name "/snowflake/acct-pass" --with-decryption').toString()).Parameter.Value;

const snowflakeAppId = 'snowflake_destination';

const snowflakeTableName = "EMAIL_MODEL";

const snowflakeSourceId = "all_users";
// const snowflakeWarehouseName = 'TAPESTRY_WAREHOUSE';
// const snowflakeDatabaseName = 'TAPESTRY_DATABASE';
// const snowflakeSchemaName = 'DBT_TAPESTRY';

const mailchimpAppId = "mailchimp_destination";
// const mailchimpSourceId  = "mailchimp-newsletter";
// const mailchimpApiKey = JSON.parse(execSync('aws ssm get-parameter --name "/mailchimp/apiKey" --with-decryption').toString()).Parameter.Value;
// const mailchimpListId = JSON.parse(execSync('aws ssm get-parameter --name "/mailchimp/listId" --with-decryption').toString()).Parameter.Value;

// const allEmailsGroupId = "all_emails";

// const snowAcctHost = "dla27293.us-east-1";
// const snowUserAcctUser = "fantasticfour";
// const snowAbPass = "Fantastic1258$";

module.exports =  {
  // snowAcctHost,
  // snowUserAcctUser,
  // snowAcctPass,
  snowflakeAppId,
  // snowflakeTableName,
  // snowflakeSourceId,
  // snowflakeWarehouseName,
  // snowflakeDatabaseName,
  // snowflakeSchemaName,
  // snowflakeSourceId,
  // mailchimpApiKey,
  // mailchimpListId,
  // mailchimpSourceId,
  mailchimpAppId,
  // allEmailsGroupId
}