// truffle-config.js

// Configure your compilers
module.exports = {
    compilers: {
        solc: {
            version: "^0.8.0"
        }
    },
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
        }
    }
}