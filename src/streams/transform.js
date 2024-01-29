import * as process from 'node:process';
import { Transform } from 'node:stream';
import { createInterface } from 'node:readline';

const transform = async () => {
  const myTransform = new Transform({
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
      callback(null, chunk.split('').reverse().join(''));
    },
  });

  myTransform.on('data', (chunk) => console.log('Reverse text: ' + chunk));

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter text: ',
  });

  rl.on('line', (line) => {
    myTransform.write(line);
    rl.prompt();
  });

  rl.on('close', () => {
    myTransform.end();
  });

  rl.prompt();
};

await transform();
