import Link from 'next/link';
import { useState } from "react";
import { useEffect } from "react";
// import { shortenAddress } from "../../utils/shortenAddress";
import {
  useDisconnect,
  useNetworkMismatch,
  useNetwork,
  ChainId,
} from "@thirdweb-dev/react";

import ChainContext from "../../context/Chain";
import { useContext } from 'react';

function Header({
    address,
    chain,
    setChain,
    explorer,
    setExplorer,
    setCurrency,
    setNativeContractThird,
}) {

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const disconnect = useDisconnect();
    const isMismatched = useNetworkMismatch(); // switch to desired chain
    const [, switchNetwork] = useNetwork();
    // console.log("chain", chain);

    const { selectedChain, setSelectedChain } = useContext(ChainContext);
    if (selectedChain == "56") {
        console.log("checking selected chain outside handle bsc bsc")
        setChain("0x38")
    }

    useEffect(() => {
        networkCheck();
    }, [address, chain, selectedChain]);

     // network check
    async function networkCheck() {
        if(chain == "0x1" || chain == "0x38" || chain == "0x89") {
            if(chain == "0x1") {
                switchNetwork(ChainId.Mainnet)
                setExplorer(process.env.NEXT_PUBLIC_EXPLORER_ETH)
                setCurrency("ETH")
                const nativeContractThird = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" // mainnet weth
                setNativeContractThird(nativeContractThird)
            } else if(chain == "0x38") {
                switchNetwork(ChainId.BinanceSmartChainMainnet)
                setExplorer(process.env.NEXT_PUBLIC_EXPLORER_BSC)
                setCurrency("BNB")
                const nativeContractThird = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" // mainnet wbnb
                setNativeContractThird(nativeContractThird)
            } else if(chain == "0x89") {
                switchNetwork(ChainId.Polygon)
                setExplorer(process.env.NEXT_PUBLIC_EXPLORER_POLYGON)
                setCurrency("MATIC")
                const nativeContractThird = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270" // mainnet wmatic
                setNativeContractThird(nativeContractThird)
            }
        } else {
            switchNetwork(ChainId.BinanceSmartChainMainnet)
        }
            // if(chain == "0x38") {
            //     switchNetwork(ChainId.BinanceSmartChainMainnet)
            //     setExplorer(process.env.NEXT_PUBLIC_EXPLORER_BSC)
            //     setCurrency("BNB")
            //     const nativeContractThird = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" // mainnet wbnb
            //     setNativeContractThird(nativeContractThird)
            // }
            
        // } else {
        //     switchNetwork(ChainId.BinanceSmartChainMainnet)
        // }
    }

    const handleNetworkChange = event => {
        if(event.target.value == "179") {            
            setSelectedChain(event.target.value)
            switchNetwork(ChainId.Polygon)
            setChain("0x89")
            console.log("checking handle polygon")
        } else if(event.target.value == "1") {
            setSelectedChain(event.target.value)
            switchNetwork(ChainId.Mainnet)
            setChain("0x1")
            console.log("checking handle eth")
        } else if(event.target.value == "56") {
           setSelectedChain(event.target.value)
           switchNetwork(ChainId.BinanceSmartChainMainnet)
           setChain("0x38")
           console.log("checking handle bsc")
        }
    }
    console.log("this is the connected chain ", chain)
    console.log("address in the header section", address)
    console.log("selectedChain header", selectedChain)

    return (
        <>
            <div class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <nav class="navbar">

                                <div class="header-search d-flex align-items-center">
                                {isMismatched}
                                </div>


                                <div class="dashboard_log">
                                    <div class="d-flex align-items-center">
                                        <select
                                            class="form-control"
                                            value={String(selectedChain)}
                                            onChange={handleNetworkChange}
                                            // onChange={(e) => setSelectedChain(parseInt(e.target.value))}
                                        >
                                            <option selected value={String(ChainId.BinanceSmartChainMainnet)}>BSC</option>
                                            <option value={String(ChainId.Mainnet)}>ETH</option>
                                        </select>
                                        <div class="profile_log dropdown">
                                            <div class="user" onClick={toggleTrueFalse}>
                                                <span class="thumb"><i class="mdi mdi-account"></i></span>
                                                <span class="name">{address?.substring(0, 5)}...{address?.substring(address.length, address.length - 5)}</span>
                                                <span class="arrow"><i class="la la-angle-down"></i></span>
                                            </div>

                                            <div className={isToggled ? "dropdown-menu dropdown-menu-end show" : "dropdown-menu dropdown-menu-end"}>
                                                <Link href="" onClick={disconnect} class="dropdown-item logout">
                                                    <i class="la la-sign-out"></i> Disconnect
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
