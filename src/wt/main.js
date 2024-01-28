import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { Worker } from 'node:worker_threads';

const START_NUMBER = 10;

const performCalculations = async () => {
  const countCores = os.cpus();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'worker.js');

  const res = countCores.map((core, i) => {
    return new Promise((resolve) => {
      const count = START_NUMBER + i;
      const worker = new Worker(filePath, { workerData: count });

      worker.on('message', (res) => resolve(res));
    });
  });

  await Promise.all(res).then((val) => console.log(val));
};

await performCalculations();
