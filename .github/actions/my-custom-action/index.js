const core = require('@actions/core');

async function run() {
  try {
    const username = core.getInput('username');
    const password = core.getInput('password');

    core.info(`Running with username: ${username}`);
	core.info(`🔐 Authenticating...`);
    // NEVER log passwords or tokens!
    // Add your logic here
  } catch (error) {
    core.setFailed(`Action failed: ${error.message}`);
  }
}

run();
