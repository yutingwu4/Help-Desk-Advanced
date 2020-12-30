const mongoose = require('mongoose');
const request = require('supertest');
const server = 'http://localhost:3000';

//testing for user creation, that data reaches database
    //create 'GET' request to verify existing data in database
   describe('User route', () => {
        
    beforeAll((done) => {
        const MONGO_URI = 'mongodb+srv://C_J_S:cEXzKdZwci44JkTU@cluster0.xxyaq.mongodb.net/Cluster0?retryWrites=true&w=majority';
        mongoose.connect (MONGO_URI , {
        useNewUrlParser : true, 
        useUnifiedTopology: true, 
        dbName: 'HelpDesk'
        }).then(response =>{
        console.log('Successfully connected to Mongo DB')
        }).catch(error => console.log(error));
        done()
        }   
    )


    describe('/user', () => {
        describe('GET', () => {
            it('responds with 200 status and application/json content type', () => {
                return request(server)
                  .get('/user')
                  .expect('Content-type', /application\/json/)
                  .expect(200);
            });
            it('body of response to be an object with properties: username, password, or authorized', () => {
                return request(server)
                  .get('/user')
                  .then(response => {
                      expect(typeof response.body).toBe('object')
                    //   expect(typeof response.body === 'object').toBeTruthy()
                      expect(response.body).toHaveProperty('username')
                      expect(response.body).toHaveProperty('password')
                      expect(response.body).toHaveProperty('authorized')
                  })
            })
        });

    //then create 'POST' request for new data
        describe('POST', () => {
            //sending dummy data 
            const data = {
                username: 'Lex',
                password: 'password',
                authorized: true
            };

            it('responds with 200 status', () => {
              return request(server)
                .post('/user')
                .send(data)
                .expect(200);
            })
        })  
    });
});

//assuming mongodb schema is properly created, will not need another GET request to verify if new data is recorded 

