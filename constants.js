const { execSync } = require('child_process');


const snowflakeAppId = 'snowflake_destination';

const snowflakeTableName = "EMAIL_MODEL";

const snowflakeSourceId = "all_users";
const snowflakeWarehouseName = 'TAPESTRY_WAREHOUSE';
const snowflakeDatabaseName = 'TAPESTRY_DATABASE';
const snowflakeSchemaName = 'DBT_TAPESTRY';

const mailchimpAppId = "mailchimp_destination";
const mailchimpSourceId  = "mailchimp-newsletter";

const allEmailsGroupId = "all_emails";


module.exports =  {
  snowflakeAppId,
  snowflakeTableName,
  snowflakeSourceId,
  snowflakeWarehouseName,
  snowflakeDatabaseName,
  snowflakeSchemaName,
  mailchimpSourceId,
  mailchimpAppId,
  allEmailsGroupId
}