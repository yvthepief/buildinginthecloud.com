const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.45.0',
  name: 'buildinginthecloud.com',
  authorEmail: 'no-reply@dontsendmemails.com',
  authorName: 'Yvo van Zee',
  authorUrl: 'yvovanzee.nl',
  description: 'CDK code for buildingthecloud.com',
  repository: 'https://github.com/yvthepief/secure_bucket_construct.git',
  defaultReleaseBranch: 'main',
  autoApproveOptions: {
    secret: 'PROJEN_GITHUB_TOKEN',
  },
});
project.synth();