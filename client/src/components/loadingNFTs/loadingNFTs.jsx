
import { ethers } from "ethers";
import contractABI from "../../abis/contractABI.json";
import CarouselSize from "../Carousel/Carousel";
import { Box, Spinner } from "@chakra-ui/react";
import { useState , useEffect   } from "react";
import Modal from "../Modal/Modal";
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
//import { BigNumber} from "ethers";



export default function Gallery() {
  /*
    const {
    isMetaMaskInstalled,
    currentChainId,
    checkIsOnAmoyNetwork,
    toggleNetworkModal,
    connectWallet,
    walletConnected,
  } = useAmoy(); */

  const [NFTs, setNFTs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNFT, setCurrentNFT] = useState({});

  
  useEffect(() => {
    loadNFTs();
  }, []);

  const loadNFTs = async () => {
    setIsLoading(true);
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const contract = new ethers.Contract(
        contractAddress,
        contractABI.abi,
        provider
      );
      console.log("Contract address: ", contractAddress);
      console.log("Contract: ", contract);
      const totalSupply = await contract.totalSupply();
      console.log("Total supply: ", totalSupply);
      try {
        let nfts = [];
        //for (let i = BigNumber.from[1]; i.lte(totalSupply); i = i.add(1)) {
         for (let i = 1; i <= Number(totalSupply); i++) {
          const deedMetadataURI = await contract.getTokendeed(i);
          const imageMetadataURI = await contract.getTokenimage(i);
          const description = await contract.getTokendescription(i);
          

          nfts.push({
            deedlink: deedMetadataURI,
            image: imageMetadataURI,
            description: description,
          });

          console.log(nfts);
        }

        setNFTs(nfts);
        console.log("NFTs: ", NFTs);
      } catch (error) {
        console.error("Failed to load NFTs:", error);
      }
    }
    setIsLoading(false);
  };

  const handleNFTClick = (nft) => {
    setCurrentNFT(nft);
    setModalVisible(true);

  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" p={20}>
        <Spinner size="xl" />
      </Box>
    );
  }

};

    return (
        <>
      <CarouselSize nfts={NFTs} onNFTClick={handleNFTClick} />
      {modalVisible && (
        <Modal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          content={
            <>
              <img src={currentNFT.image} alt="NFT" />
              <p>{currentNFT.description}</p>
              <a href={currentNFT.deedLink}>Title Deed</a>
            </>
          }
        />
      )}
    </>
    );
    
    
};