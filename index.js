const core = require("@actions/core");
const github = require("@actions/github");

try {
  // get inputs
  const name = core.getInput("who-to-greet");
  const payload = JSON.stringify(github.context.payload, undefined, 2);

  // log inputs
  // console.log(`Hello ${name}!`);
  console.log(`Hello World!`);
  console.log(`This event payload ${payload}`);

  // get outputs
  const time = new Date().toTimeString();

  // return outputs
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
