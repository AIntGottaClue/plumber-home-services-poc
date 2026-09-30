import {defineConfig} from 'astro/config';
export default defineConfig({output:'static',base:process.env.BASE_PATH||'/',outDir:process.env.OUT_DIR||'./dist',trailingSlash:'always'});
