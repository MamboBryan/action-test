const core = require('@actions/core')
const core = require('@actions/github')

try {

    const whoToGreet = core.getInput('who-to-greet')
    console.log('Hello ${whoToGreet}!')

    const time = (new Date()).toTimeString();
    core.setOutput("time", time)

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log('This event payload ${payload}')

} catch (error){
    core.setFailed(error.message);
}