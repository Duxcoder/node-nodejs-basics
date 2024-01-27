import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'files', 'fileToCompress.txt');
  const zipPath = join(__dirname, 'files', 'fileToCompress.txt.gz');
  await pipeline(createReadStream(filePath), createGzip(), createWriteStream(zipPath));
};

await compress();
