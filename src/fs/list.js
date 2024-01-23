import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const list = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const dirPath = join(__dirname, 'files');
    console.log(await readdir(dirPath));
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await list();
