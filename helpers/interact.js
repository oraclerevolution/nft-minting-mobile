import Web3 from 'web3'
import {pinJSONToIPFS} from "./pinata";

const contractABI = require('../pages/artifacts/contracts/SartMint.sol/StartMint.json')
const contractAddress = "0x8f33F8c5dd47EfC8eD7196CDCA3a76EfD10ca7C2";
const web3 = new Web3('https://matic-mumbai.chainstacklabs.com')

const mintNFT = async (url, name, description, address_user, quantity) => {
    // error handling
    if (url.trim() == "" || (name.trim() == "" || description.trim() == "")) {
        return {
            success: false,
            status: "❗Please make sure all fields are completed before minting.",
        }
    }

    // make metadata
    const metadata = new Object()
    metadata.name = name;
    metadata.image = url;
    metadata.description = description;

    //make pinata call
    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
        return {
            success: false,
            status: "😢 Something went wrong while uploading your tokenURI.",
        }
    }
    const tokenURI = pinataResponse.pinataUrl;
    console.log("le lien vers uri pinata est", tokenURI)

    // load our contract
    const contract = await web3.eth.Contract(contractABI.abi, contractAddress)

    //set up your Ethereum transaction
    const transactionParameters = {
        to: contractAddress,
        from: address_user,
        data: contract.methods.mint(address_user, quantity, "0x00").encodeABI()
    }

    //sign transaction via metamask
    try {
        const Hash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params:[transactionParameters]
        })
        return {
            success: true,
            status: "✅ Check out your transaction on Mumbai Exporer: https://mumbai.polygonscan.com/tx/" + txHash
        }
    }catch (e) {
        return {
            success: false,
            status: "😥 Something went wrong: " + e.message
        }
    }
}

export default mintNFT