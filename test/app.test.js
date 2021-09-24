import {
    describe,
    expect,
    test,
    jest
} from '@jest/globals'
import request from 'supertest'
import app from '../src/server.js'


describe('#Controller', () => {

    test('Should be possible to calculate sum and average from an array', async () => {

        const response = await request(app).post('/sum-and-average')
            .send({
                numbers: [1, 2, 3, 4, 5]
            })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('sum', 15)
        expect(response.body).toHaveProperty('average', 3)
    })

    test('Should not be possible to sum an array filled with leters', async () => {
        const response = await request(app).post('/sum-and-average')
            .send({
                numbers: ["h", "c", "b", "a", "j"]
            })

        expect(response.status).toBe(400)

        expect(response.body).toEqual({ error: "you must inform an array containing numbers" })
    })

    test('Should return an error if a user not send an array', async () => {
        const response = await request(app).post('/sum-and-average')
            .send({
                numbers: "test"
            })

        expect(response.status).toBe(400)
        expect(response.body).toEqual({ error: "numbers must be an array" })
    })

    test('Should ignore strings on sum and average', async () => {
        const response = await request(app).post('/sum-and-average')
            .send({
                numbers: [1, 2,"s","test", 3, 4, "c", 5]
            })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('sum', 15)
        expect(response.body).toHaveProperty('average', 3)
    })
})