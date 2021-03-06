import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'

import { getBalance } from '../utils/erc20'
import useBlock from './useBlock'

const useTokenBalance = (tokenAddress: string, address: string = null) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    let newBalance: string = '0';
    if (!address) {
      newBalance = await getBalance(ethereum, tokenAddress, account)
    } else {
      newBalance = await getBalance(ethereum, tokenAddress, address)
    }
    if (!balance.eq(new BigNumber(newBalance))) {
      setBalance(new BigNumber(newBalance))
    }
  }, [account, block, ethereum, tokenAddress])

  useEffect(() => {
    if (account && ethereum) {
      fetchBalance()
    }
  }, [account, ethereum, setBalance, block, tokenAddress, fetchBalance])

  return balance
}

export default useTokenBalance
