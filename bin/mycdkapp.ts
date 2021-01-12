#!/usr/bin/env node
/* import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MycdkappStack } from '../lib/mycdkapp-stack';

const app = new cdk.App();
new MycdkappStack(app, 'MycdkappStack');  */



import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MycdkappStack } from '../lib/mycdkapp-stack';

const app = new cdk.App();
new MycdkappStack(app, 'PipelineStack', {
  env: {
    account: '968532631134',
    region: 'us-east-1',
  }
});

app.synth();
