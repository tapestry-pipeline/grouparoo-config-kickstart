const {mailchimpSourceId, mailchimpAppId,  allEmailsGroupId} = require('../../constants.js');
const mailchimpListId = process.env.MAILCHIMP_LIST_ID
exports.default = async function buildConfig() {
  return [
    {
      id: mailchimpSourceId,
      name: mailchimpSourceId,
      class: "destination",
      type: "mailchimp-export",
      appId:  mailchimpAppId, // The ID of the App this Source uses - e.g. `appId: "mailchimp_app"`
      groupId:  allEmailsGroupId , // The ID of the group whose members you want to export - e.g. `groupId: "high_value_customers"`
      syncMode: "sync", // How should Grouparoo sync with this destination? Options: "sync", "additive", "enrich"

      options: {
        listId: mailchimpListId, // The Mailchimp List ID (https://mailchimp.com/help/find-audience-id/)
      },

      // Mappings are how you choose which properties to export to this destination.
      // Keys are the name to display in the destination, values are the IDs of the Properties in Grouparoo.

      // mailchimp column name : grouparoo config property IDs
      mapping: {
        email_address: "EMAIL",
        FNAME: "FIRST_NAME",
        LNAME: "LAST_NAME",
      },

      // You can export group memberships.
      // Keys are the name to display in the destination, values are the IDs of the Groups in Grouparoo.
      destinationGroupMemberships: {
        "tapestry emails":  allEmailsGroupId,
      },
    },
  ];
};