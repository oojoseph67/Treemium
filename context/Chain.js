import { ChainId } from "@thirdweb-dev/sdk"
import { createContext } from "react"

const mainChainId = ChainId.Mainnet

const ChainContext = createContext(mainChainId)

export default ChainContext