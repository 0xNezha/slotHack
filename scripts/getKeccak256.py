# @Calculate MAP's slot
# @Author : 0xNezha
# @Twitter: https://twitter.com/0xNezha
# @Github : https://github.com/0xNezha

import binascii
import sha3 # pip install pysha3

#将数值转换成32字节数组
def bytes32(i):
    return binascii.unhexlify('%064x' % i)

# 计算32字节数组的 keccak256 哈希值
def keccak256(x):
    return sha3.keccak_256(x).hexdigest()

# 得到该映射对应的 slot 
print(keccak256(bytes32(0x2560A0256) + bytes32(10)))








