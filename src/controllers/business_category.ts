import { business_categories } from "../models";

import express, { Request, Response } from 'express';
const router = express.Router();
const authenticateToken = require('../middleware');
// select all
router.get('/',authenticateToken, async (req: Request, res: Response) => {
    let data = await business_categories.findAll();
    res.json(data);
})
// select by id
router.get('/:id',authenticateToken, async (req: Request, res: Response) => {
    let data = await business_categories.findByPk(req.params.id);
    res.json(data);
})
// insert
router.post('/',authenticateToken, async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.name) {
            throw 'name is not found '
        }
        if (!data.isForGroupType) {
            throw 'isForGroupType is not found'
        }
        business_categories.create({
            name: data.name,
            isForGroupType: data.isForGroupType
        })
        res.json({ 'status': true })
    } catch (e) {
        res.json({ 'status': false, 'error': e })
    }
})
// update
router.put('/',authenticateToken, async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.id) {
            throw 'id is not found'
        }
        if (!data.name) {
            throw 'name is not found'
        }
        if (!data.isForGroupType) {
            throw 'isForGroupType is not found'
        }
        business_categories.update({
            name: data.name,
            isForGroupType: data.isForGroupType
        }, {
            where: { id: data.id }
        })
        res.json({ 'status': true })
    } catch (e) {
        res.json({ 'status': false, 'error': e })
    }
})
// delete by id
router.delete('/',authenticateToken, async (req: Request, res: Response) => {
    let data = req.body;
    try {
        if (!data.id) {
            throw 'id is not found'
        }
        business_categories.destroy({ where: { id: data.id } })
        res.json({ 'status': true })
    } catch (e) {
        res.json({ 'status': false, 'error': e })
    }
})

module.exports = router