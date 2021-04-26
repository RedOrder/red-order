1) run command npm install
2) run command: npx truffle compile - this will compile the token contract into the build folder
3) run command npx ganache-cli --deterministic to start ganache local blockchain
4) from a separate terminal than in step 2 run command npx truffle migrate --network development to deploy the contract