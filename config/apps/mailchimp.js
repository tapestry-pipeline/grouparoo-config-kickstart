// const {mailchimpApiKey,  mailchimpAppId} = require('../../getConfigInputs.js');

// const {mailchimpApiKey,  mailchimpAppId} = require('../../getConfigInputs.js');
const {mailchimpAppId} = require('../../getConfigInputs.js');


// 830405a4f4d726ab4b5e20be73c5a092-us6
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