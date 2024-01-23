import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const rename = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const oldName = join(__dirname, 'files', 'wrongFilename.txt');
    const newName = join(__dirname, 'files', 'properFilename.md');
    await fs.rename(oldName, newName);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await rename();
