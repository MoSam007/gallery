var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://samato:n70Lo8MZgJbCmnTu@cluster1.qjvlrbu.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://samato:n70Lo8MZgJbCmnTu@cluster1.qjvlrbu.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://samato:n70Lo8MZgJbCmnTu@cluster1.qjvlrbu.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
