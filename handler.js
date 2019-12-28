"use strict";
const resizeHandler = require("./resizeHandler.js");

const emojis = ["🌵", "🎄", "🌲", "🌳", "🌴", "🌱"];

exports.rank = async event => {
  const rank = event.queryStringParameters.rank;
  const rankEmoji = emojis[rank >= emojis.length ? emojis.length - 1 : rank];
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: rankEmoji
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

exports.resize = async event => {
  try {
    var resizer = new resizeHandler();
    const imagePath = await resizer._process(event);
    const URL = `http://${process.env.BUCKET}.s3-website.${process.env.REGION}.amazonaws.com`;

    return {
      headers: { location: `${URL}/${imagePath}` },
      statusCode: 301,
      body: ""
    };
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};
