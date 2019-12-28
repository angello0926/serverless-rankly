const resizeHandler = require('../resizeHandler');
let assert = require('assert');

describe('Array', function() {
    describe('#indexOf()', function() {

        beforeEach(function() {
            process.env.BUCKET = "dynamic-image-resizing-demo"
            process.env.REGION = "us-east-1"
        });

        afterEach(function() {
            delete process.env.BUCKET;
            delete process.env.REGION;
        });
    
        var testResizeHandler = new resizeHandler();
    
        var event = { 
            pathParameters :
            {
                size: "100x150",
                image: "12408550423065874305.jpg"
            }
        };
        
        it('should return a image path ', async () => {
            const imagePath = await testResizeHandler._process(event)
            assert(imagePath === '100x150/12408550423065874305.jpg')
        });
    });
});