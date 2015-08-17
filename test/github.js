import Backbone from 'backbone'

describe('Github', () => {
    it('should be able to pull the data', () => {
        let x = new Backbone.Model()
        x.url = 'http://api.github.com'
        x.fetch().then(() => {
            expect(x.toJSON()).not.toBe(null)
        })
    })
})