'use strict';
const AWS = require('aws-sdk');

module.exports.insert = async (event) => {
  console.log("event",event);
  console.log("event.body",event.body);
  const body = JSON.parse(event.body).toString();
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Item: {
      primary_key: body.name,
      email: body.email,
    },
  };
  await dynamoDb.put(putParams).promise();

  return {
    statusCode: 201,
  };
};