import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'files', 'script.js');
  const childProcess = spawn('node', [filePath, ...args], {
    stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on('exit', (code) => {
    process.exit(code);
  });
};

const args = ['someArg1', 'someArg2', 'someArg3'];
spawnChildProcess(args);
