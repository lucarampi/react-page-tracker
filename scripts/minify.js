const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const outputDir = 'dist';

const compressFiles = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      compressFiles(fullPath); // 遞迴處理子目錄
    } else if (file.endsWith('.js')) {
      const minifiedPath = fullPath.replace(/\.js$/, '.min.js');
      console.log(`Compressing ${fullPath} -> ${minifiedPath}`);
      esbuild
        .build({
          entryPoints: [fullPath],
          outfile: minifiedPath,
          minify: true,
        })
        .catch((err) => console.error(`Error compressing ${fullPath}:`, err));
    }
  });
};

compressFiles(outputDir);
