#!/usr/bin/env node
import { spawn } from 'node:child_process';
const command = process.argv[2] || 'help';
if (command === 'build') {
  const child = spawn(process.execPath, ['scripts/build.mjs'], { stdio: 'inherit' });
  child.on('exit', (code) => process.exit(code ?? 0));
} else if (command === 'dev' || command === 'preview') {
  const child = spawn(process.execPath, ['scripts/serve.mjs'], { stdio: 'inherit' });
  child.on('exit', (code) => process.exit(code ?? 0));
} else {
  console.log('Astro local build shim for this static site. Commands: astro build, astro dev, astro preview');
}
