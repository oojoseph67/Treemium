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

function Header({
    address,
    chain,
    setChain,
    explorer,
    setExplorer,
    setCurrency,
    setNativeContractThird,
    // headerChain,
    // setHeaderChain,
}) {

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const disconnect = useDisconnect();
    const isMismatched = useNetworkMismatch(); // switch to desired chain
    const [, switchNetwork] = useNetwork();
    // console.log("chain", chain);

    const [headerC, setHeaderC] = useState("")

    useEffect(() => {
        networkCheck();
    }, [address, chain]);

    // useEffect(() => {
    //     setChain(JSON.parse(window.localStorage.getItem('chain')))
    // }, [])

    // useEffect(() => {
    //     window.localStorage.setItem('chain', chain)
    // }, [chain])

    // useEffect(() => {
    //     const newChain = window.localStorage.getItem("chain")
    //     if( newChain !== null ) setChain(JSON.parse(newChain))
    // })

    // useEffect(() => {
    //     console.log("chain inside useEffect", headerC)
    //     window.localStorage.setItem("chain", JSON.stringify(headerC))
    // }, [chain])

     // network check
    async function networkCheck() {
        if(chain == "0x1" || chain == "0x38" || chain == "0x89") {
            if(chain == "0x1") {
                switchNetwork(ChainId.Mainnet)
                setExplorer(process.env.NEXT_PUBLIC_EXPLORER_ETH)
                setCurrency("ETH")
                const nativeContractThird = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" // mainnet weth
                setNativeContractThird(nativeContractThird)
                // setHeaderChain("0x1")
            } else if(chain == "0x38") {
                switchNetwork(ChainId.BinanceSmartChainMainnet)
                setExplorer(process.env.NEXT_PUBLIC_EXPLORER_BSC)
                setCurrency("BNB")
                const nativeContractThird = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" // mainnet wbnb
                setNativeContractThird(nativeContractThird)
                // setHeaderChain("0x38")
            } else if(chain == "0x89") {
                switchNetwork(ChainId.Polygon)
                setExplorer(process.env.NEXT_PUBLIC_EXPLORER_POLYGON)
                setCurrency("MATIC")
                const nativeContractThird = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270" // mainnet wmatic
                setNativeContractThird(nativeContractThird)
                // setHeaderChain("0x89")
            }
        } else {
            switchNetwork(ChainId.Mainnet)
        }
    }

    const handleNetworkChange = event => {
        setChain(event.target.value)
        setHeaderC(event.target.value)
        // setHeaderChain(event.target.value)
        if(event.target.value == "0x89") {
            switchNetwork(ChainId.Polygon)
        } else if(event.target.value == "0x1") {
            switchNetwork(ChainId.Mainnet)
        } else if(event.target.value == "0x38") {
            switchNetwork(ChainId.BinanceSmartChainMainnet)
        }
    }
    console.log("this is the connected chain ", chain)

    console.log("address in the header section", address)

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
                                            value={chain}
                                            onChange={handleNetworkChange}
                                        >
                                            <option value="0x1">ETH</option>
                                            <option value="0x38">BSC</option>
                                            <option value="0x89">POLYGON</option>
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
