import { log } from "./logging";

process.on("message", (message: string) => {

    if (message !== "start-work") {
        throw new Error("Unknown inter-process request recieved");
    }


    let counter = 0;

    setInterval(() => {
        log.info(`[WORKER-CHILD]: counter: ${counter}`);
        (process as any).send(counter);
    }, 2000);

});

