// news-image-20261127 entry (Node 22, standard library only).
// The poster is drawn by build_poster.py and shipped as entry.png beside
// this file; the program copies it to the output directory. It uses no
// network and writes identical bytes on every run. The output directory
// is /output in the grader, or MAKEFUN_OUTPUT_DIR when set locally.
//
// Run it with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
