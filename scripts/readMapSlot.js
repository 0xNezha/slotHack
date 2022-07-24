// @Read MAP's slot
// @Author : 0xNezha
// @Twitter: https://twitter.com/0xNezha
// @Github : https://github.com/0xNezha

const ethers = require('ethers')

let url = 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
let HttpProvider = new ethers.providers.JsonRpcProvider(url);
let slotHack_Address = '0xc81f73EdcA69ac1663d5b2b2E3CBa520d62e5425' // 目标合约地址

async function main(){

const target = await HttpProvider.getStorageAt(
    slotHack_Address,
    "0x2cb73cd019c70b24b7128c3a8fa046c2e524595f0f21ef557221be7ab820bc99" // 上一步计算出的 slot
    )
console.log(target)
}
main()