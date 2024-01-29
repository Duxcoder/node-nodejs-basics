import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const read = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'fileToRead.txt');
    console.log(await readFile(filePath, { encoding: 'utf8' }));
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await read();
