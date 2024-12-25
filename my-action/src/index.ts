import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  // Fetch the value of the input 'who-to-greet' specified in action.yml
  const nameToGreet: string = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  
  // Record the time of greeting as an output
//  const time: string = new Date().toTimeString();
 // core.setOutput("time", time);

  // Get the JSON webhook payload for the event that triggered the workflow
 // const payload: any = JSON.stringify(github.context.payload, undefined, 2);
 // console.log(`The event payload: ${payload}`);
 console.log('tset');
} catch (error) {
  // Handle errors and indicate failure
  if (error instanceof Error) {
   // core.setFailed(error.message);
  } else {
   // core.setFailed('An unknown error occurred');
  }
}
