import { sampleData } from '../../data'
import { findAllSampleData, findSampleDataById } from './service'

describe('SampleDataService', () => {
    describe('findAllSampleData', () => {
        it('should return the same data that is declared in data file', () => {
            expect(findAllSampleData()).toMatchObject(sampleData)
        })
    })

    describe('findSampleDataById', () => {
        it('should return an object for an identifier between 1 and 10', () => {
            const idArray = Array.from(Array(11).keys()).slice(1)

            idArray.forEach(id => expect(findSampleDataById(id)).toBeDefined())
        })

        it('should return undefined when object was not found by identifier', () => {
            expect(findSampleDataById(15)).toBeUndefined()
        })
    })
})
