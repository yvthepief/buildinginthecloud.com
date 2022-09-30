import { App, aws_route53, aws_route53_patterns, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class RedirectStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new aws_route53_patterns.HttpsRedirect(this, 'Redirect', {
      recordNames: ['buildinginthecloud.com'],
      targetDomain: 'yvovanzee.nl',
      zone: aws_route53.HostedZone.fromLookup(this, 'BuildinginthecloudHostedZone', {
        domainName: 'buildinginthecloud.com',
      }),
    });
  }
}

const Env = {
  account: '517095477860',
  region: 'eu-west-1',
};
const app = new App();

new RedirectStack(app, 'buildinginthecloudcom-dev', { env: Env });

app.synth();