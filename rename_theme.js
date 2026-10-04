import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const f of files) {
        const fullPath = path.join(dir, f);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content.replace(/(bg|text|border|ring|shadow|fill|stroke|from|to|via)-coral/g, '$1-primary');
            newContent = newContent.replace(/(bg|text|border|ring|shadow|fill|stroke|from|to|via)-space/g, '$1-secondary');
            if (content !== newContent) {
                console.log(`Updated theme classes in ${f}`);
                fs.writeFileSync(fullPath, newContent, 'utf8');
            }
        }
    }
}

try {
    processDirectory(srcDir);
} catch (e) {
    console.error(e);
}
