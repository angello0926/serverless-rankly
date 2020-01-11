# Use AWS lambda via [Serverless](https://serverless.com/) Framework

This is part of the project from the following udemy course
[The-complete-junior-to-senior-web-developer-roadmap](https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/)

This serverless service provides the end points for another API to show ranking and resize image.

To run test:
`npm run test`


Since Sharp.js deployed in AWS lambda is using Linux (unlike the local env), please run the following commands to install the right Sharp.js before deployment:
https://github.com/lovell/sharp/issues/1459

```
rm -rf node_modules/sharp
npm install --arch=x64 --platform=linux --target=12.14.0 sharp
```

To deploy serverless project:
`sls deploy`

## Useful Notes

Serverless Testing Strategies
https://dev.to/didil/serverless-testing-strategies-4g92 


Tutorial on dynamic-image-resizing
https://serverless.com/blog/dynamic-image-resizing-nodejs/

