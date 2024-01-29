import { cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const copy = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const dirPath = join(__dirname, 'files');
    const dirCopyPath = join(__dirname, 'files_copy');
    await cp(dirPath, dirCopyPath, { recursive: true, force: false, errorOnExist: true });
  } catch (e) {
    console.log('error', e.message);
  }
};
await copy();
