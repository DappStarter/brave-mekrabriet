require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strategy razor punch equip give nation flock true'; 
let testAccounts = [
"0xc97c994f8f96389549a61ac159fd95019b27020951245d132184d0f62ad011b8",
"0x7f951d3203f6793a5f3899ad5a92b075f8e6e1e65e33dc2b5e284a1c334bea66",
"0x1cf6d2148bd5f9cce29f141c8fcf7e29cb6eb4f3eccd2c9e5502474a24b62748",
"0xf273f5e3c28133ec4345b04fa16bb110308533c67f9aa492403fdaeec2ff3d11",
"0x9c2923bb9654f3ee54c1e2b05d6c882d5f497221f5dce2158ea26b7a4d81b4ac",
"0x331ff5079b33eaaea5da254859125bc8a08cb112c38b0a609b86287ddc18d027",
"0xf358dd41a7a0831cef34722693c9a8698d11c648e16221380b3bb5d6bd58e380",
"0xb076f59a56ab12c186c4f26796c4e3773dc7d85092a52d775088febb2d84e5dd",
"0x8fb031d41e7367c88ea1a112b513ad2abc11d975f40742a0d42a7d3d7699c983",
"0xfbf23a100735bbb570f6c10e7e1820eafd3bbc32852bea7bfffd926805c2bacd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
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
            version: '^0.5.11'
        }
    }
};
