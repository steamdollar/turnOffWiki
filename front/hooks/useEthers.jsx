import { useEffect, useState } from 'react';
import Web3 from 'web3/dist/web3.min'

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

            const web3 = new Web3(window.ethereum)
            setWeb3(web3)
        })()
    }, [])
    return [web3, account, error]
}

export default useEthers;