
const NFT_s=[];
function mintNFT (name,sport,height,country,Higest_score) {
    const NFT= {
       "name":name,
       "sport":sport,
       "height":height,
       "country":country,
       "Higest_score":Higest_score
    };
    NFT_s.push(NFT);
    console.log("Minted:"+ Higest_score);
}

function listNFTs () {
      for(let i=0;i<NFT_s.length;i++){
      console.log(NFT_s[i]);
      }
}


function getTotalSupply() {

   console.log(NFT_s.length);

}

mintNFT("Mahendra Singh Dhoni","Cricket","1.80m","INDIA","183");
mintNFT("Virat Kholi","Cricket","1.75m","INDIA","254");
listNFTs();
getTotalSupply();
