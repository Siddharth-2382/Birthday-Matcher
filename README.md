# FindBirthdayShares Smart Contract

Demo hosted here: https://who-do-i-share-birthday-with.vercel.app/

## Description

The FindBirthdayShares smart contract is a Web application powered by a Soroban smart contract. It allows users to submit their name and birthdate and retrieve a list of names of people who share a birthday on a specified date. It is intended for deployment on the Soroban network.

## Features

- Submit Birthday: Users can submit their name along with their birthdate.
- Get Birthdays: Retrieve a list of names who share a birthday on a given date.

We perform the above using Rust maps and vectors. The map is used to store the name and birthdate of each user. The vector is used to store the names of users who share a birthday on a given date.

## Requirements

- Rust
- Soroban CLI
- Node.js
- React
- npm

## Steps Involved in Integrating a Soroban Smart Contract with a React App

1. Install Rust & Wasm32 Target

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup target add wasm32-unknown-unknown
```

2. Install Soroban CLI

```bash
cargo install --locked --version 20.0.0-rc.4.1 soroban-cli
```

3. Configure the Futurenet:

```bash
soroban config network add --global futurenet \
  --rpc-url https://rpc-futurenet.stellar.org \
  --network-passphrase "Test SDF Future Network ; October 2022"
```

4. Create an Identity on the Futurenet:

```bash
soroban config identity generate --global <your-name>
```

5. Store the address of the account generated above:

```bash
soroban config identity address <your-name>
```

6. Fund the address with text XLMs:

```bash
soroban config identity fund <address-found-above> --network futurenet
```

7. Compile the Contract to a release wasm

```bash
cd contract-src
cargo build --target wasm32-unknown-unknown --release
```

8. Deploy the Contract to Futurenet & store the contract address:

```bash
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/who-do-i-share-my-birthday-with.wasm \
  --source <your-name> \
  --network futurenet > .soroban/who-do-i-share-my-birthday-with
```

9. Test the Contract by Invoking it from the CLI:

```bash
soroban contract invoke \
  --id $(cat .soroban/who-do-i-share-my-birthday-with) \
  --source <your-name> \
  --network futurenet \
  -- \
  get_birthdays \
  --date "26-march-2001"
```

And the output should be something like: `["shubham"]`.

10. Now to integrate this with the React App, we need to generate bindings for the contract:

```bash
cd ..
soroban contract bindings typescript \
  --network futurenet \
  --contract-id $(cat ./contract-src/.soroban/who-do-i-share-my-birthday-with) \
  --output-dir node_modules/who-do-i-share-my-birthday-with
```

The above should create an npm module in the `node_modules` directory.

11. Install dependencies in the React App

```bash
npm install
```

12. Start the app

```bash
npm start
```
