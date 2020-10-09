const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

describe('Article API', () => {

    let newArticle;
    beforeEach = () => {
        const newArticle = {
            "id": 6,
            "title": "The best article",
            "author": "Al Sumner",
            "headline": "Have you ever read such drivel"
        };
    }

    afterEach = () => {
        chai.request('http://localhost:3000/').delete('articles/6')
    }
 
    it.only('should return 200 status code', async () => {
        const response = await chai.request('http://localhost:3000/').get('articles')
        expect(response.statusCode).to.equal(200)
    })

    it.only('should get the correct article id', async () => {
        const response = await chai.request('http://localhost:3000/').get('articles')
        expect(response.body[0].id).to.equal(1)
    })

    it.only('should get the correct article author', async () => {
        const response = await chai.request('http://localhost:3000/').get('articles')
        expect(response.body[0].author).to.equal("John Smith")
    })

    it.only('should get the correct article title', async () => {
        const response = await chai.request('http://localhost:3000/').get('articles')
        expect(response.body[0].title).to.equal("News Article")
    })

    it.only('should add a new article successfully', async () => {
        const response = await chai.request('http://localhost:3000/').post('articles').send(newArticle)
        expect(response.statusCode).to.equal(201);
    });

    it.only('should delete an article successfully', async () => {
        await chai.request('http://localhost:3000/').post('articles').send(newArticle)
        const response = await chai.request('http://localhost:3000/').delete('articles/6')
        expect(response.body).to.not.have.keys([{ "id": 6 }])
    })
});
