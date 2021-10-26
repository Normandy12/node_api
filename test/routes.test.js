const request = require('supertest')
const app = require('../server-test.js')


describe('User API', () =>{
    it('should show all users', async () => {
        const res = await request(app).get('/users')
        expect(res.statusCode).toEqual(200)
        expect(res.body.length).toBeGreaterThan(0)
    }),

    it('should show a single user', async () => {
        const res = await request(app).get('/users/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('first_name')
    }),

    it('should create user', async () => {
        const res = await request(app)
            .post('/users')
            .send({
                first_name: "Test"
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toEqual('Success')
    }),

    it('should update user', async () => {
        const res = await request(app)
            .put('/users/6')
            .send({
                first_name: "Test",
                username: "test",
                password: "test",
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual('Success')
    }),

    it('should delete user', async () => {
        const res = await request(app)
            .delete('/users/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual('Success')
    })

    it('should delete bulk users', async () => {
        const res = await request(app)
            .delete('/users')
            .send({
                id: [2,3,4]
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual('Success')
    })

    it('should authenticate user', async () => {
        const res = await request(app)
            .post('/authenticate')
            .send({
                username: "test",
                password: "test"
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(true)
    })

})
