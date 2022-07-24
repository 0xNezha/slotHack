// $ npx hardhat node
// $ Account #3: 0x90F79bf6EB2c4f870365E785982E1f101E93b906 (10000 ETH)
// $ Private Key: 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6
// HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

const ethers = require('ethers') 
let url = 'http://127.0.0.1:8545/';
let HttpProvider = new ethers.providers.JsonRpcProvider(url);
let slotHack_Address = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
let slotHackJson = require('./artifacts/contracts/solcTest.sol/slotHack.json')

let signer = new ethers.Wallet('0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6', HttpProvider);
let Contract = new ethers.Contract(slotHack_Address, slotHackJson.abi,);
let ContractWithSigner = Contract.connect(signer);

async function main(){
let tx = await ContractWithSigner.set_count_A('0x111111')
let receipt  = await tx.wait();
console.log("status: "+ receipt.status +", hash: "+ receipt.transactionHash);//1 successful ， 0 reverted

//let view = await ContractWithSigner.guess_item_2('123')
//console.log(view);
for(let i=0; i<10000; i++){
    const storage1 = await HttpProvider.getStorageAt(slotHack_Address,i)
    console.log(storage1)
}

}


main()
