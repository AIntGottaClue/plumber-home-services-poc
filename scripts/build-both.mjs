import {execFileSync} from 'node:child_process';
import {mkdirSync,cpSync,writeFileSync,rmSync,readFileSync} from 'node:fs';
writeFileSync('public/assets/plumber.jpg',Buffer.from(readFileSync('public/assets/plumber.jpg.b64','utf8'),'base64'));
const prefix=process.env.PAGES_PREFIX||'/plumber-home-services-poc/';
rmSync('site',{recursive:true,force:true});
for(const mode of ['config','gviz']){execFileSync('npm',['run','build'],{stdio:'inherit',env:{...process.env,DATA_MODE:mode,BASE_PATH:`${prefix}${mode==='gviz'?'demo':'config'}/`,OUT_DIR:`./dist-${mode}`}});}
mkdirSync('site',{recursive:true});cpSync('dist-config','site/config',{recursive:true});cpSync('dist-gviz','site/demo',{recursive:true});
writeFileSync('site/index.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex,follow"><title>Plumber site proof of concept</title><style>body{font:18px/1.6 Arial;padding:45px;max-width:800px;margin:auto;color:#173f45}a{color:inherit}li{margin:15px 0}</style></head><body><h1>Plumber site proof of concept</h1><p>One design, two data sources. Independent previews, not commissioned business websites.</p><h2>Config version</h2><a href="config/">Open the sample config site</a><h2>Sheet-backed versions</h2><ul><li><a href="demo/?business=abc-austin">ABC Home &amp; Commercial Services</a></li><li><a href="demo/?business=radiant-austin">Radiant Plumbing &amp; Air Conditioning</a></li><li><a href="demo/?business=stans-austin">Stan's Heating, Air, Plumbing &amp; Electrical</a></li></ul><p>No Cloudflare, production hostname, analytics, or live submissions.</p></body></html>`);
writeFileSync('site/.nojekyll','');
