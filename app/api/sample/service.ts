import { sampleData } from '../../data'

/**
 * Returns sample data which was retrieved from data file.
 */
const findAllSampleData = () => sampleData

/**
 * Returns sample data by identifier.
 *
 * @param id - Identifier
 */
const findSampleDataById = (id: number) => sampleData.find(data => data.id === id)

export { findAllSampleData, findSampleDataById }
