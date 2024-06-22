import { getTypes, getAnimalById, getAnimalsByType } from '../petList.js';

export const getIndexHTML = (req, res) => {
    const petKeys = getTypes();
    res.render('index', { title: 'Adopt a Pet', petKeys });
};

export const getAnimalsHTML = (req, res) => {
    const petsType = getAnimalsByType(req.params.animal);
    if (!petsType) {
        res.status(404).render('404Error', { title: 'Page Not Found' });
        return;
    }
    res.render('animals', { title: req.params.animal, petsType });
}

export const getAnimalHTML = (req, res) => {
    const pet = getAnimalById(req.params.animal, req.params.id);
    if (!pet) {
        res.status(404).render('404Error', { title: 'Page Not Found' });
        return;
    }
    res.render('animal', { title: 'Adopt Me', pet, petType: req.params.animal });
}