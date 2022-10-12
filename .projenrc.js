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
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();