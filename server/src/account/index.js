var account = function(app){
    app.get('/', (req, res) => res.send('Hello World!'))
    
}
module.exports = account;