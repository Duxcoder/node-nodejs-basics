import * as process from 'node:process';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filename = join(__dirname, 'files', 'fileToRead.txt');

  const fileStream = createReadStream(filename);

  fileStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
