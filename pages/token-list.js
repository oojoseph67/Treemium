import LayoutAdmin from "../components/layout/LayoutAdmin";
import Link from "next/link"
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

const Index = () => {
    const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY

//   const [headerChain, setHeaderChain] = useState("")
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


  useEffect(() => {
    if (address) {
      getTokenBalances()
      getNativeBalance()
      getTokenTransfers()
    }
  }, [address, chain])

  const { loadingContract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_TRANSFER_CONTRACT_ADDRESS_POLYGON
  );

  // transfer contract
  const {
    mutate: transferTokens,
    TTisLoading,
    error,
  } = useTransferToken(transferContract)

  if (error) {
    console.error("failed to transfer tokens", error);
  }

  const transferAmount = async () => {
    const transferDetails = await transferTokens({ to: recipientAddress, amount: amount })
    setRecentTx({
      txhash: transferDetails.hash,
      from: address,
      to: recipientAddress,
      amount: amount,
      symbol: newSymbol,
    });
    setShowRecentTx(true)
    console.log("transfer details", transferDetails)
    console.log(
      `${amount} ${newSymbol} token successfully sent to ${recipientAddress}`
    );
    setMessage(
      `${amount} ${newSymbol} token successfully sent to ${recipientAddress}`
    );
    setAmount("")
    setRecipientAddress("")
  }


  // get wallet tokens and value
  async function getTokenBalances() {
    try {
      await Moralis.start({ apiKey: apiKey })

      const response = await axios.get("https://web-production-e7a4.up.railway.app/tokenBalance", {
        params: {
          address: address,
          chain: chain,
        }
      })

      if (response.data) {
        let t = response.data;

        for (let i = 0; i < t.length; i++) {
          t[i].bal = (
            Number(t[i].balance) / Number(`1E${t[i].decimals}`)
          ).toFixed(4);
          t[i].usd = (t[i].bal * Number(t[i].usd)).toFixed(2);
          t[i].address = t[i].token_address;
        }
        setWalletTokenBalance(t);
      }
    }catch(error) {
      console.log(error);
    }
  }

  // get native token and value
  async function getNativeBalance() {
    const response = await axios.get("https://web-production-e7a4.up.railway.app/nativeBalance", {
      params: {
        address: address,
        chain: chain,
      }
    })
    // console.log("response", response)
    if (response.data.balance && response.data.usd) {
      setNativeBalance((Number(response.data.balance) / 10 ** 18).toFixed(4))
      setNativePrice(
        (
          (Number(response.data.balance) / 10 ** 18) * Number(response.data.usd)
        ).toFixed(2)
      )
    }
  }

  // get portfolio value
  useEffect(() => {
    let val = 0;
    for (let i = 0; i < walletTokenBalance.length; i++) {
      val = val + Number(walletTokenBalance[i].usd);
    }
    val = val + Number(nativePrice);
    setTotalValue(val.toFixed(2));
  }, [nativePrice, walletTokenBalance]);

  //get wallet transfer history
  async function getTokenTransfers() {
    try {
      const response = await axios.get("https://web-production-e7a4.up.railway.app/tokenTransfers", {
        params: {
          address: address,
          chain: chain,
        }
      })
      if(response.data){
        setTransfers(response.data)
      }
    } catch(error) {
        console.error("something is wrong", error)
    }
  }

  console.log("token-list", address) 

    
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
                // headerChain={headerChain}
                // setHeaderChain={setHeaderChain}
                pageClass={"front"}
             >
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header border-0">
                                <h4 class="card-title">All Tokens</h4>
                                <small>NB: Some of this token may be scam tokens so be careful when you interact with them</small>
                            </div>
                            <div class="card-body pt-0">
                                <div class="transaction-table">
                                    <div class="table-responsive">
                                        <table class="table mb-0 table-responsive-sm">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Contract Address</th>
                                                <th>Balance</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                                {
                                                    walletTokenBalance.map((e) => {
                                                        return(
                                                            <tr key={e.symbol}>
                                                                <td>
                                                                    <span class="buy-thumb"><i class="la la-check"></i></span>
                                                                </td>
                                                                <td>
                                                                    {e.thumbnail != 0 ? (
                                                                        <>
                                                                            {e.thumbnail && (<img src={e.thumbnail} alt="logo" width="20" heigth="20"></img>) }{e.name} <h6>{e.symbol}</h6>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            {e.name} <h6>{e.symbol}</h6>
                                                                        </>
                                                                    )}
                                                                </td>
                                                                <td> 
                                                                    <a
                                                                    target={"_blank"}
                                                                    href={`${explorer}/address/${e.address}`}
                                                                    rel="noreferrer"
                                                                    >
                                                                    <div>
                                                                        {e.address?.substring(0, 5)}...{e.address?.substring(e.address.length,e.address.length - 5)}
                                                                    </div>
                                                                    </a>
                                                                </td>
                                                                <td>{((Number(e.value) / Number(`1E${e.decimals}`)).toFixed(4)).slice(0,10)} {e.symbol}</td>
                                                                <td>${e.usd}</td>
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

export default Index;