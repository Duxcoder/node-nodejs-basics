import { open } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const create = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'fresh.txt');
    const fileHandle = await open(filePath, 'wx');
    await fileHandle.writeFile('I am fresh and young');
    await fileHandle.close();
  } catch (e) {
    console.log('file exist:', e.message);
  }
};

await create();
