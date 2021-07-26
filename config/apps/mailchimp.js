
// const {mailchimpApiKey,  mailchimpAppId} = require('../../getConfigInputs.js');

const {mailchimpApiKey,  mailchimpAppId} = require('../../getConfigInputs.js');


const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
exports.default = async function buildConfig() {
  return [
    {
      class: "app",
      id:  mailchimpAppId,
      name:  mailchimpAppId,
      type: "mailchimp",
      options: {
        apiKey: mailchimpApiKey, // Mailchimp API key
        // {{ssm:MAILCHIMP_API_KEY}}
      },
    },
  ];
};
