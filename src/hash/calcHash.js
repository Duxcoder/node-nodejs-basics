import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filename = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const hash = createHash('sha256');

  const input = createReadStream(filename);
  input.on('readable', () => {
    const data = input.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest('hex')}`);
    }
  });
};

await calculateHash();
