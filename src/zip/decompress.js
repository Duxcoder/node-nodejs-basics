import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'files', 'fileToCompress.txt');
  const zipPath = join(__dirname, 'files', 'fileToCompress.txt.gz');
  await pipeline(createReadStream(zipPath), createUnzip(), createWriteStream(filePath));
};

await decompress();
