import * as process from 'node:process';
import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const transform = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filename = join(__dirname, 'files', 'fileToWrite.txt');

  const writeStream = createWriteStream(filename);

  process.stdin.pipe(writeStream);
  writeStream.on('open', () => console.log(`Send text to fileToWrite:`));
};

await transform();
