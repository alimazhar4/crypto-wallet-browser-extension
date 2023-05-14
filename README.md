# Crypto Wallet Browser Extension
A Blockchain project of a decentralized crypto wallet which can also be added as Chrome Extension.
<p align="center">
  <img src="https://github.com/alimazhar4/crypto-wallet-browser-extension/assets/59063759/d254f108-731b-49eb-a3b5-929c5d23d10d" height=350px>
  <img src="https://github.com/alimazhar4/crypto-wallet-browser-extension/assets/59063759/b1af9b60-a6c8-4a3c-b620-9bc3c6fe73fd" height=350px>
  <img src="https://github.com/alimazhar4/crypto-wallet-browser-extension/assets/59063759/da9bccd0-45e1-47e8-9706-3603b6083750" height=350px>
</p>

## Prerequisites
1) Node Js
2) NPM
3) Moralis Account
4) Alchemy or Infura Developer Account

## Technologies Used
1) React Js - Frontend
2) Node Js - Backend
3) Ethers Js
4) Express Js

## Setup
1) Download or clone the repository using:
```sh
git clone https://github.com/alimazhar4/crypto-wallet-browser-extension.git
```
2) Navigate to the backend folder and install dependencies:
```sh
cd backend
npm install
```
3) Do the same for mwallet folder (frontend) :
```sh
cd ..
cd mwallet
npm install
```
4) Make a .env file in the backend folder and paste your Moralis Web3 API Key at the end:
```env
MORALIS_KEY= <your_moralis_api_key_here>
```
<p>   If you don't have a Moralis Account, you can make one at <a href="https://admin.moralis.io/settings" target="_blank">https://admin.moralis.io</a></p>

5) Go to mwallet directory now and make a .env file there as well and paste RPC URLs from your Alchemy or Infura. These RPC URLs are necessary to send transactions
```env
REACT_APP_ETHEREUM_RPC_URL=""
REACT_APP_MUMBAI_RPC_URL=""
REACT_APP_SEPOLIA_RPC_URL="" 
```
Currently I have only added these networks. You can add as many EVM compatible blockchains as you want.


6) Navigate to the backend directory and do the following in terminal:
```sh
node index.js
```
7) Now navigate to the mwallet (frontend) directory and dev start the application:
```sh
npm start
```
8) Now if everythings right, make a production build of the mwallet directory by running:
```sh
npm run build
```
The build folder wil be created in the mwallet directory

9) Go to Google Chrome (or any of your chromium browser) and open extensions from settings.
10) Turn on the developer mode and Load Unpack the build folder created after step 8 above.

## Important Note to Remember
Never share your passphrase or private keys with anyone and keep them in a safe place. Always test a new blockchain app using a testnet to make yourself sure and avoid any issues later on. 


