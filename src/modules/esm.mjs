import * as path from 'node:path';
import { release, version } from 'node:os';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';

import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = import('./files/a.json', {
    assert: {
      type: 'json',
    },
  });
} else {
  unknownObject = import('./files/b.json', {
    assert: {
      type: 'json',
    },
  });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 4000;

console.log(await unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
