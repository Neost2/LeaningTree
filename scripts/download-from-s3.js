// Step 1: Import the AWS SDK and fs (file system module)
const AWS = require('aws-sdk');
const fs = require('fs');

// Step 2: Initialize the S3 client
const s3 = new AWS.S3();

// Step 3: Define the S3 bucket name
const bucketName = 'leaningtree'; // Replace with your bucket name

// Step 4: Function to retrieve (download) a file from S3
async function retrieveFile(objectName, fileName = null) {
    if (!fileName) {
        fileName = objectName; // Use the object name as the file name if not provided
    }

    // Set up the parameters for S3 download
    const params = {
        Bucket: bucketName,
        Key: objectName, // The name of the object in S3
    };

    try {
        // Download the file from S3
        const data = await s3.getObject(params).promise();
        // Save the file to your local machine
        fs.writeFileSync(fileName, data.Body);
        console.log(`File ${objectName} retrieved as ${fileName}.`);
    } catch (err) {
        console.error(`Error retrieving file: ${err}`);
    }
}

// Step 5: Example usage of the retrieve function
(async () => {
    // Retrieve (download) a file
    await retrieveFile('index.html', 'downloaded_index.html'); // Replace 'index.html' with your file name
})();