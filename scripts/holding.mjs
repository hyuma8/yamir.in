// Runs after `astro build`.
// If the environment variable HOLDING is "1" (set in Vercel → Settings →
// Environment Variables), the full site build is thrown away and dist/
// contains only the "website is being upgraded" page from holding/.
// Launch day: delete the HOLDING variable in Vercel and redeploy. No code change.
import { rmSync, mkdirSync, cpSync } from 'node:fs';

if (process.env.HOLDING === '1') {
  rmSync('dist', { recursive: true, force: true });
  mkdirSync('dist');
  cpSync('holding', 'dist', { recursive: true });
  console.log('HOLDING=1 → dist/ replaced with the holding page.');
} else {
  console.log('HOLDING not set → full site deployed.');
}
