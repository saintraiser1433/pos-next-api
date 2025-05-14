import multer from 'multer';
import path from 'path';

// Dynamic storage that routes files based on field name
const dynamicStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = 'public/';
        switch (file.fieldname) {
            case 'brandImage':
                folder += 'brand/';       // PDFs go here
                break;
            case 'productImage':
                folder += 'product/';       // PDFs go here
                break;
            default:
                folder += 'others/';      // Fallback (optional)
        }
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const ext = path.extname(file.originalname);
        cb(null, `${uniqueSuffix}${ext}`);
    },
});

// Single Multer instance with combined validation
export const unifiedUpload = multer({
    storage: dynamicStorage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (
            (file.fieldname === 'brandImage' || file.fieldname === 'productImage' && file.mimetype.startsWith('image/'))
        ) {
            cb(null, true);
        } else {
            cb(new Error(`Invalid file type for ${file.fieldname}`));
        }
    },
});