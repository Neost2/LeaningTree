// Step 1: Import the AWS SDK
const AWS = require('aws-sdk');

// Step 2: Initialize the S3 client
const s3 = new AWS.S3();

// Step 3: Define the S3 bucket name
const bucketName = 'leaningtree'; // Replace with your bucket name

// Step 4: Function to delete a file from S3
async function deleteFile(objectName) {
    // Set up the parameters for S3 delete
    const params = {
        Bucket: bucketName,
        Key: objectName, // The name of the object in S3
    };

    try {
        // Delete the file from S3
        await s3.deleteObject(params).promise();
        console.log(`File ${objectName} deleted from ${bucketName}.`);
    } catch (err) {
        console.error(`Error deleting file: ${err}`);
    }
}

// Step 5: Example usage of the delete function
(async () => {
    // Delete a file
    await deleteFile('test.html'); // Replace 'index.html' with your file name
})();