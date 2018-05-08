import { fork } from "child_process";
import { join } from "path";
import { log } from "./logging";

const childWorkerPath = join(__dirname, "child.js");

// Create child process
const child = fork(childWorkerPath, [], { execArgv: ["--inspect=65235"] });

// Send child process some work
log.info(`[WORKER-PARENT-START]`);
child.send("start-work");

// Event handler
child.on("message", (message: any) => {
    log.info(`[WORKER-PARENT-MESSAGE]: message ${message}`);
});
