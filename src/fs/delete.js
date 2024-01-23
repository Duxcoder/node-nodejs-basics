import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const remove = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'fileToRemove.txt');
    await rm(filePath);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await remove();
