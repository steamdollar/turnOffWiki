import { useEffect, useState } from 'react';
import { ethers } from 'ethers'

const useEthers = () => {
    const [ account, setAccount ] = useState(null)
    const [ web3, setWeb3 ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        (async () => {
            if(!window.ethereum) {
                setError('metamask login needed')
                return;
            }
            const [ address ] = await window.ethereum.request({
                method : 'eth_requestAccounts'
            })
            setAccount(address)
            
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            setWeb3(provider)
        })()
    }, [])
    return [web3, account, error]
}

export default useEthers;