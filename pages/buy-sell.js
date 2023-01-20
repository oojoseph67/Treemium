import dynamic from 'next/dynamic';
import Link from "next/link";
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


const Index = ({

}) => {
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


  useEffect(() => {
    if (address) {
      getTokenBalances()
      getNativeBalance()
      getTokenTransfers()
    }
  }, [address])

  const { loadingContract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_TRANSFER_CONTRACT_ADDRESS_BSC
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

  // to handle the swap function 
  const handleChangeTransferFromToken = event => {
    console.log('token swap from', event.target.selectedOptions[0].label)
    console.log("address contract swap from", event.target.value)
    setFromToken(event.target.value)
    setValueExchanged("")
    setERCLoading(true);
    try {
      for(let i = 0; i < walletTokenBalance.length; i++) {
        if (walletTokenBalance[i].address == event.target.value) {
          const ercBalance = walletTokenBalance[i].bal
          const ercSymbol = walletTokenBalance[i].symbol
          const ercName = walletTokenBalance[i].name
          const ercDecimals = walletTokenBalance[i].decimals
          const ercThumbnail = walletTokenBalance[i].thumbnail

          // const balance = walletTokenBalance[i].balance
          // const balanceWITH = ethers.utils.formatEther(balance)

          const test123 = ethers.utils.parseEther(ercBalance)

          let string = ercBalance
          let substring = "0.0"
          console.log("checking something", string.includes(substring));

          // if (string.includes(substring)) {
          //   setNewBalanceSwap(balanceWITH);
          //   setNewSymbolSwap(ercSymbol)
          //   setNewNameSwap(ercName)
          //   setNewDecimalsSwap(ercDecimals)
          // } else {
          //   setNewBalanceSwap(ercBalance);
          //   setNewSymbolSwap(ercSymbol)
          //   setNewNameSwap(ercName)
          //   setNewDecimalsSwap(ercDecimals)
          // }

          setNewBalanceSwap(ercBalance);
          setSwapBalance(test123.toString())
          setNewSymbolSwap(ercSymbol)
          setNewNameSwap(ercName)
          setNewDecimalsSwap(ercDecimals)

          console.log("newStuff transfer from", test123, ercBalance, ercSymbol, ercName, ercDecimals, ercThumbnail);      
          console.log("newStuff2",test123.toString())    
        } else {
          const test123 = ethers.utils.parseEther(nativeBalanceThird)

          setNewBalanceSwap(nativeBalanceThird)          
          setSwapBalance(test123.toString())
          setNewSymbolSwap(nativeSymbolThird)
          setNewNameSwap(nativeNameThird)
          setNewDecimalsSwap(nativeDecimalsThird)
        }
      }
      setTokenChanged(true);
      setERCLoading(false);
    } catch (error) {
      console.error("error", error);
      setERCLoading(false);
    }
  }

  const handleBalanceNumberFromToken = event => {
    // const limit = newBalance.length
    if(event.target.value > newBalanceSwap){
      setValue(newBalanceSwap)
    } else {
      setValue(event.target.value)
    }
  }

  const handleChangeTransferToToken = event => {
    setERCLoading(true);
    console.log('token swap to', event.target.selectedOptions[0].label)
    console.log("address contract swap to", event.target.value)
    setToToken(event.target.value)
    setValueExchanged("")
  }

  async function get1inchSwap() {
    try {
      const tx = await axios.get(`
        https://api.1inch.io/v5.0/56/swap?fromTokenAddress=${fromToken}&toTokenAddress=${toToken}&amount=${swapBalance}&fromAddress=${address}&slippage=5
      `)
      console.log("swap data", tx.data)
      setTo(tx.data.tx.to) 
      setTxData(tx.data.tx.data);
      setValueExchangedDecimals(Number(`1E${tx.data.toToken.decimals}`))
      setValueExchanged(tx.data.toTokenAmount)
    } catch(error) {
      console.error("swap error", error)
      console.log("swap error", error.response.data.description)

      let string = error.response.data.description
      let substringLiquidity = "liquidity"
      let substringEstimate = "estimate"
      let substringEnough = "enough"
      let substringEquals = "equals"
      let substringMiner = "miner"
      let substringBalance = "balance"
      let substringAllowance = "allowance"
      let substringAmount = "amount"
      let substringWrong = "wrong"

      if(string.toLowerCase().includes(substringLiquidity.toLowerCase())) {
        console.log("insufficient liquidity in the token you want to swap to probably a scam token")
        setSwapMessage("insufficient liquidity in the token you want to swap to probably a scam token")
      } else if(string.toLowerCase().includes(substringEstimate.toLowerCase())) {
        console.log("cannot estimate")
        setSwapMessage("cannot estimate")
      } else if(string.toLowerCase().includes(substringEnough.toLowerCase())) {
        console.log("you may not have enough ETH balance for gas fee")
        setSwapMessage("you may not have enough ETH balance for gas fee")
      } else if(string.toLowerCase().includes(substringEquals.toLowerCase())) {
        console.log("you are about to swap a token against itself, it can't work")
        setSwapMessage("you are about to swap a token against itself, it can't work")
      } else if(string.toLowerCase().includes(substringMiner.toLowerCase())) { 
        console.log("cannot estimate. don't forget about miner fee")
        setSwapMessage("cannot estimate. don't forget about miner fee")
      } else if(string.toLowerCase().includes(substringBalance.toLowerCase())) {
        console.log("not enough balance")
        setSwapMessage("not enough balance")
      } else if(string.toLowerCase().includes(substringAllowance.toLowerCase())) {
        console.log("not enough allowance")
        setSwapMessage("not enough allowance")
      } else if(string.toLowerCase().includes(substringAmount.toLowerCase())) {
        console.log("amount is not set")
        setSwapMessage("amount is not set")
      } else if(string.toLowerCase().includes(substringWrong.toLowerCase())) {
        console.log("wrong/no address to swap to")
        setSwapMessage("wrong/no address to swap to")
      }
    }
    setNewBalance("")          
    setSwapBalance("")
    setNewSymbol("")
    setNewName("")
    setNewDecimals("")
  }

  const defaultSwapETH= [
    {
        name: "USDC",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    },
    {
        name: "USDT",
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    },
    {
        name: "WBNB",
        address: "0x418D75f65a02b3D53B2418FB8E1fe493759c7605",
    },
    {
        name: "WETH",
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
    {
        name: "WBTC",
        address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    },
    {
        name: "DAI",
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    },
    {
        name: "MATIC",
        address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    },
    {
        name: "BUSD",
        address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    },
    {
        name: "APECOIN",
        address: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
    },
    {
        name: "SHIBA",
        address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    },
  ]
    const defaultSwapBSC= [
        {
            name: "USDC",
            address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        },
        {
            name: "USDT",
            address: "0x55d398326f99059fF775485246999027B3197955",
        },
        {
            name: "BNB",
            address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        },
        {
            name: "B-ETH",
            address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        },
        {
            name: "WBTC",
            address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
        },
        {
            name: "DAI",
            address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
        },
        {
            name: "MATIC",
            address: "0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
        },
        {
            name: "BUSD",
            address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        },
        {
            name: "DOGE",
            address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
        },
        {
            name: "SHIBA",
            address: "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D",
        },
    ]
    const defaultSwapPOLY= [
        {
            name: "MATIC",
            address: "0x0000000000000000000000000000000000001010",
        },
        {
            name: "USDC",
            address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        },
        {
            name: "USDT",
            address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        },
        {
            name: "BNB",
            address: "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
        },
        {
            name: "WETH",
            address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        },
        {
            name: "WBTC",
            address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
        },
        {
            name: "DAI",
            address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
        },
        {
            name: "BUSD",
            address: "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7",
        },
        {
            name: "APECOIN",
            address: "0xB7b31a6BC18e48888545CE79e83E06003bE70930",
        },
        {
            name: "CHAINLINK",
            address: "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
        },
    ]

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
            >


                <div class="row">
                    <div class="col-xl-3"></div>
                    <div class="col-xl-6 col-lg-12 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="buy-sell-widget">
                                    <form class="currency_validate">
                                        <div class="mb-3">
                                            <label class="me-sm-2">From</label>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text">
                                                    <i
                                                        class="fa fa-bank"></i>
                                                    </label>
                                                </div>
                                                <select 
                                                    value={fromToken}
                                                    onChange={handleChangeTransferFromToken}
                                                    class="form-control"
                                                >
                                                    <option value="">Select Token</option>
                                                    {
                                                        walletTokenBalance.map((e) => {
                                                        return (
                                                                <option
                                                                    value={e.address}
                                                                    key={e.symbol}
                                                                    >
                                                                    <>
                                                                        {e.name} <h6>{e.symbol}</h6>
                                                                    </>
                                                                </option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <label class="me-sm-2">To</label>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text"><i
                                                        class="fa fa-bank"></i></label>
                                                </div>
                                                <select
                                                    name="toToken"
                                                    value={toToken}
                                                    onChange={handleChangeTransferToToken}
                                                    class="form-control"
                                                    >
                                                    <option value="">Select Token</option>
                                                    {
                                                        chain == "0x1" ? (
                                                            defaultSwapETH.map((e) => {
                                                                return (
                                                                    <option
                                                                        value={e.address}
                                                                    >
                                                                        {e.name}
                                                                    </option>
                                                                )
                                                            })
                                                        ) : chain == "0x38" ? (
                                                            defaultSwapBSC.map((e) => {
                                                                return (
                                                                    <option
                                                                        value={e.address}
                                                                    >
                                                                        {e.name}
                                                                    </option>
                                                                )
                                                            })
                                                        ) : chain == "0x89" ? (
                                                            defaultSwapPOLY.map((e) => {
                                                                return (
                                                                    <option
                                                                        value={e.address}
                                                                    >
                                                                        {e.name}
                                                                    </option>
                                                                )
                                                            })
                                                        ) : (
                                                            <>

                                                            </>
                                                        )
                                                    }
                                                    {
                                                        walletTokenBalance.map((e) => {
                                                            return (
                                                            <option
                                                                value={e.address}
                                                                key={e.symbol}
                                                            >
                                                                <>
                                                                {e.name}
                                                                </>
                                                            </option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <label class="me-sm-2">Enter your amount</label>
                                            <div class="input-group">
                                                <input
                                                    class="form-control"
                                                    onChange={handleBalanceNumberFromToken}
                                                    value={value}
                                                    type="number"
                                                    min={0}
                                                    max={newBalanceSwap}
                                                    placeholder={newBalanceSwap}
                                                    />
                                                <input 
                                                    value={
                                                        !valueExchanged 
                                                        ? ""
                                                        : (valueExchanged / valueExchangedDecimals).toFixed(5)
                                                    }
                                                    disabled={true}
                                                    class="form-control"
                                                />
                                            </div>
                                        </div>
                                        <a
                                            href="javascript:void(0)" 
                                            onClick={get1inchSwap}
                                            class="btn btn-success w-100"
                                        >
                                            Get Conversion
                                        </a>
                                        <br/>
                                        <br/>
                                        <a
                                            disabled={!valueExchanged}
                                            onClick={sendTransaction}
                                            class="btn btn-success w-100"
                                        >
                                            Swap Tokens
                                        </a>
                                        {swapTransactionIsLoading && <div>Loading</div>}
                                        {isSuccess && 
                                            <div>
                                                View Transaction:
                                                <a
                                                    target={"_blank"}
                                                    href={`${explorer}/tx/${JSON.stringify(swapTransactionData.hash)}`}
                                                    rel="noreferrer"
                                                >
                                                    View Transaction
                                                </a>
                                                {JSON.stringify(swapTransactionData.hash)}
                                            </div>}
                                    </form>
                                    {
                                      swapMessage != "" ? (
                                          <div class="alert alert-danger" role="alert">
                                            {swapMessage}
                                            {/* <a href="#" class="alert-link">an example link</a> */}
                                          </div>
                                      ) : (
                                        <></>
                                      )
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <p class="p-4">Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate
                            suscipit explicabo voluptas eos in tenetur error temporibus dolorum. Nulla!</p> */}
                    </div>
                    <div class="col-xl-3"></div>
                </div>

                

            </LayoutAdmin>
        </>
    );
};

export default Index;