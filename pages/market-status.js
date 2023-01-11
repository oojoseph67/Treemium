import LayoutAdmin from "../components/layout/LayoutAdmin";
import { useEffect, useState } from "react";
import defaultABI from "../transfer/defaultAbi.json";
import {
  useContract,
  useMetamask,
  useAddress,
  useTransferToken,
  useBalance,
  useDisconnect,
  useNetwork,
  useNetworkMismatch,
  ChainId,
} from "@thirdweb-dev/react";
import axios from 'axios';
import { ethers } from "ethers";

import { useSendTransaction } from 'wagmi'
import { usePrepareSendTransaction } from 'wagmi'

import Login from "../components/login";
import Login2 from "../components/login2";
import Loading from "../components/loading"

const { default: Moralis } = require("moralis");

const Index = ({ marketData }) => {
    const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY

  const [chain, setChain] = useState("0x38");
  const [nativeBalance, setNativeBalance] = useState(0)
  const [nativePrice, setNativePrice] = useState(0)
  const [walletTokenBalance, setWalletTokenBalance] = useState([])
  const [totalValue, setTotalValue] = useState(0)
  const [transfers, setTransfers] = useState([])
  const [transferContractAddress, setTransferContractAddress] = useState("");
  const [explorer, setExplorer] = useState("")
  const [currency, setCurrency] = useState("")
  const [newBalance, setNewBalance] = useState();
  const [newSymbol, setNewSymbol] = useState();
  const [newName, setNewName] = useState();
  const [newDecimals, setNewDecimals] = useState();
  const [newThumbnail, setNewThumbnail] = useState()
  const [amount, setAmount] = useState("")

  const [showERC, setShowERC] = useState(false);
  const [ercLoading, setERCLoading] = useState(false);
  const [tokenChanged, setTokenChanged] = useState(false);
  const [txLoading, setTxLoading] = useState(false);
  const [ercTokenAddress, setERCTokenAddress] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("")

  const { data: transferContract } = useContract(
    ercTokenAddress, 
    defaultABI
  )
  const address = useAddress();
  console.log("Address", address)

  const [ercContract, setERCContract] = useState("")
  // const [transferContract, setTransferContract] = useState("")
  const [customTokenDetails,setCustomTokenDetails] = useState("")
  const [message, setMessage] = useState("")
  const [showRecentTx, setShowRecentTx] = useState(false);
  const [recentTx, setRecentTx] = useState({
    txhash: "",
    from: "",
    to: "",
    amount: "",
    symbol: "",
  });

  const [swapMessage, setSwapMessage] = useState("")
  const [fromToken, setFromToken] = useState("")
  const [toToken, setToToken] = useState("")
  const [value, setValue] = useState("")
  const [valueExchanged, setValueExchanged] = useState("")
  const [valueExchangedDecimals, setValueExchangedDecimals] = useState("")
  const [to, setTo] = useState("") // the 1inch aggregator
  const [txData, setTxData] = useState("")

  const [newBalanceSwap, setNewBalanceSwap] = useState();
  const [newSymbolSwap, setNewSymbolSwap] = useState();
  const [newNameSwap, setNewNameSwap] = useState();
  const [newDecimalsSwap, setNewDecimalsSwap] = useState();
  const [swapBalance, setSwapBalance] = useState("")

  console.log("this is swap balance", swapBalance)

  const { config } = usePrepareSendTransaction({
     request: {
      from: address,
      to: String(to),
      data: String(txData),
      value: String(swapBalance),
    },
  })

  const { swapTransactionData, swapTransactionIsLoading, isSuccess, sendTransaction } = useSendTransaction(config)


  const nativeToken = useBalance();
  const nativeBalanceThird = nativeToken.data?.displayValue;
  const nativeSymbolThird = nativeToken.data?.symbol;
  const nativeNameThird = nativeToken.data?.name;
  const nativeDecimalsThird = nativeToken.data?.decimals;
  const [nativeContractThird, setNativeContractThird] = useState("")

  console.info("nativeToken", nativeToken);
  // console.log("marketData", marketData)
  // console.log("address", address) 
  console.log("program", transferContract)
  console.log("wallet token balance", walletTokenBalance)
  console.log("newBalance",newBalance)
  console.log("newSymbol",newSymbol)
  console.log("newName",newName)
  console.log("newDecimals",newDecimals)
  console.log("newThumbnail",newThumbnail)

  console.log("swap error message: ", swapMessage)
  console.log("recipientAddress", recipientAddress)
  // console.log("nativePrice", nativePrice)
  // console.log("nativeBalance", nativeBalance)
  // console.log("total value", totalValue)
  console.log("transfers", transfers)
  // const [provider, setProvider] = useState({})

  // useEffect(() => {
  //   if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     // setProvider(provider);
  //     const signer = provider.getSigner(); 
  //     const ercABI = [
  //       "function balanceOf(address) view returns (uint256)",
  //       "function transfer(address to, uint256) returns (bool)",
  //       "function symbol() external view returns (string memory)",
  //       "function name() external view returns (string memory)",
  //       "function decimals() external view returns (uint8)",
  //     ];

  //     const ercContract = new ethers.Contract(ercTokenAddress, ercABI, signer);
  //     const transferContract = new ethers.Contract(
  //       transferContractAddress,
  //       transferABI,
  //       signer
  //     );
  //     setERCContract(ercContract)
  //     setTransferContract(transferContract)
  //   }

  // }, []);

  // transfer contract
  const {
    mutate: transferTokens,
    isLoading,
    error,
  } = useTransferToken(transferContract)


  useEffect(() => {
    if (address) {
    }
  }, [address])


    
    if (isLoading) return <Loading></Loading>
    if(!address) return <Login2></Login2>
    

    return (
        <>
            <LayoutAdmin 
                address={address}
                chain={chain}
                setChain={setChain}
                explorer={explorer}
                setExplorer={setExplorer}
                setCurrency={setCurrency}
                setNativeContractThird={setNativeContractThird}
            pageClass={"admin"}
                pageTitle="">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="row">
                            {/* <div class="col-xl-3 col-lg-6 col-md-6">
                                <div class="widget-card">
                                    <div class="widget-title">
                                        <h5>Balance</h5>
                                        <p class="text-success">133% <span><i class="las la-arrow-up"></i></span></p>
                                    </div>
                                    <div class="widget-info">
                                        <h3>$18,235.0</h3>
                                        <p>USD</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6">
                                <div class="widget-card">
                                    <div class="widget-title">
                                        <h5>Balance</h5>
                                        <p class="text-danger">133% <span><i class="las la-arrow-down"></i></span></p>
                                    </div>
                                    <div class="widget-info">
                                        <h3>$18,235.0</h3>
                                        <p>USD</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6">
                                <div class="widget-card">
                                    <div class="widget-title">
                                        <h5>Balance</h5>
                                        <p class="text-success">133% <span><i class="las la-arrow-up"></i></span></p>
                                    </div>
                                    <div class="widget-info">
                                        <h3>$18,235.0</h3>
                                        <p>USD</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6">
                                <div class="widget-card">
                                    <div class="widget-title">
                                        <h5>Balance</h5>
                                        <p class="text-danger">133% <span><i class="las la-arrow-down"></i></span></p>
                                    </div>
                                    <div class="widget-info">
                                        <h3>$18,235.0</h3>
                                        <p>USD</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div class="row">

                            <div class="col-xl-8 col-lg-12 col-xxl-8">
                                {/* <div class="card profile_chart transparent">
                                    <div class="card-header">
                                        <div class="chart_current_data">
                                            <h3>254856 <span>USD</span></h3>
                                            <p class="text-success">125648 <span>USD (20%)</span></p>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="chart-content text-center">
                                            <div class="row">
                                                <div class="col-xl-4 col-sm-6 col-6">
                                                    <div class="chart-stat">
                                                        <p class="mb-1">24hr Volume</p>
                                                        <strong>$1236548.325</strong>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-sm-6 col-6">
                                                    <div class="chart-stat">
                                                        <p class="mb-1">Market Cap</p>
                                                        <strong>19B USD</strong>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-sm-6 col-6">
                                                    <div class="chart-stat">
                                                        <p class="mb-1">Circulating</p>
                                                        <strong>29.4M BTC</strong>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-sm-6 col-6">
                                                    <div class="chart-stat">
                                                        <p class="mb-1">All Time High</p>
                                                        <strong>19.783.06 USD</strong>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-sm-6 col-6">
                                                    <div class="chart-stat">
                                                        <p class="mb-1">Typical hold </p>
                                                        <strong>88 days</strong>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-sm-6 col-6">
                                                    <div class="chart-stat">
                                                        <p class="mb-1">Trading activity </p>
                                                        <strong>70% buy </strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div class="card-body pt-0">
                                <div class="transaction-table">
                                    <div class="table-responsive">
                                        <table class="table mb-0 table-responsive-sm">
                                        <thead>
                                            <tr>
                                                <th>Position</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>24h High</th>
                                                <th>24 Low</th>
                                                <th>Market Cap</th>
                                                {/* <th>Market Chart</th> */}
                                            </tr>
                                        </thead>
                                            <tbody>
                                                {
                                                    marketData.map((e) => {
                                                        return(
                                                            <tr key={e.market_cap_rank}>
                                                                <td>{e.market_cap_rank}</td>
                                                                <td>{e.image && (<img src={e.image} alt="logo" width="20" heigth="20"></img>)} {e.name}</td>
                                                                <td>$ {e.current_price}</td>
                                                                <td>$ {e.high_24h}</td>
                                                                <td>$ {e.low_24h}</td>
                                                                <td>$ {e.market_cap}</td>
                                                                <td></td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </LayoutAdmin>
        </>
    );
};


export const getServerSideProps = async() => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  
    const marketData = await res.json()
  
    // const options = {
    //   method: 'GET', 
    //   headers: {
    //     accept: 'application/json', 
    //     'X-API-KEY': 
    //     'cqHhtltaU6GF4MVFpkTdAm2aibChMQNyVhKLrprbx5qDJvHGV51f3LxDSvhII4AE'
    //   }
    // };
  
    // const res2 = await fetch('https://deep-index.moralis.io/api/v2/0x348Df9bd14475C780A78BF48492B9A29a2032B96/balance?chain=eth', options)
    // const data = await res2.json()
  
  
    return {
      props: {
        marketData,
        // data,
      }
    }
}

export default Index;
