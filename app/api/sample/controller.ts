import { Request, Response } from 'express'

import { findAllSampleData, findSampleDataById } from './service'

const getSampleData = (_: Request, res: Response) => {
    res.send(findAllSampleData())
}

const getSampleDataById = (req: Request, res: Response) => {
    const { id } = req.params
    const data = findSampleDataById(Number(id))

    if (data) {
        res.send(data)
    } else {
        res.status(404).send('Sample data was not found.')
    }
}

export { getSampleData, getSampleDataById }
