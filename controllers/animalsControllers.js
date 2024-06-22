import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getIndexHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
};

export const getAnimalsHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/animals.html'));
}

export const getAnimalHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/animal.html'));
}