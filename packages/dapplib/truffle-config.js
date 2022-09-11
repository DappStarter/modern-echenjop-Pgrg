require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue razor misery arrow hover fat swing gesture'; 
let testAccounts = [
"0xc5b47ae8e8c23697dcd1eceadfb0aa35b7ab419742c3cb9910db27646f6e6e9f",
"0x361e6de20749da54517cca049c14a04cd10abba899da19c8afbfe303277f3cfc",
"0x20faaca4d6a55ae66f2c5cd01346c78de8306c590831cb4ec66cdbe22a27f4e2",
"0xc2d0fa00d52a5d136db8e454b66366066346b5836ea992ed809eb8b42daaa732",
"0x2447bc116ab1e75f9a9d586535e47ea366a0cb2065c27893fd1fe2d2e3379654",
"0x926a5944ac3aa1a18dcd74dd605ceadcb64881c6ae4f04a724af33bbdac9192b",
"0xb44eecaa91c76d29191c6ab7af828efdfd1dc29894a50aada6bba0f397bab357",
"0xa04341d029afa2faa7a2b7675163d5294f02e2aad985fe56c8741467e8fd1a26",
"0x06154e8dc552027181e0629315679bcf7407cbf624aa62babbe74813ee6a9c2c",
"0x8a9ecb07c86fd32a7ca7270c5fda873e903f739543fdf6a5078156fa7342cb2e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

