var easy = document.getElementById("easy");
var Medium = document.getElementById("Medium");
var NebulaXyield = document.getElementById("NebulaXyield");


var easyDiv = document.getElementById("EasyDiv");
var InterDiv = document.getElementById("InterDiv");
var HowToDiv = document.getElementById("HowToDiv");

var instruc = document.getElementById("instruc");
var Header = document.getElementById("header");


easy.addEventListener("click", function () {
    instruc.style.display = "none"
    easyDiv.style.display = "block";
    InterDiv.style.display = "none";
    HowToDiv.style.display = "none";
    easy.style.textShadow = "0.2vw 0.2vw 0.1vw rgba(0, 0, 0, 0.833)";
    Medium.style.textShadow = "0vw 0vw 0.1vw rgba(0, 0, 0, 0.833)";
    NebulaXyield.style.textShadow = "0vw 0vw 0.1vw rgba(0, 0, 0, 0.833)";

    easy.style.height = "6vw";
    Medium.style.height = "5vw";
    NebulaXyield.style.height = "5vw";
    

});

Medium.addEventListener("click", function () {
  instruc.style.display = "none";
  easyDiv.style.display = "none";
  InterDiv.style.display = "block";
  HowToDiv.style.display = "none";
  Medium.style.textShadow = "0.2vw 0.2vw 0.1vw rgba(0, 0, 0, 0.833)";
  easy.style.textShadow = "0vw 0vw 0.1vw rgba(0, 0, 0, 0.833)";
  NebulaXyield.style.textShadow = "0vw 0vw 0.1vw rgba(0, 0, 0, 0.833)";

  easy.style.height = "5vw";
  Medium.style.height = "6vw";
  NebulaXyield.style.height = "5vw";
});

NebulaXyield.addEventListener("click", function () {
  instruc.style.display = "none";
  easyDiv.style.display = "none";
  InterDiv.style.display = "none";
  HowToDiv.style.display = "block";
  NebulaXyield.style.textShadow = "0.2vw 0.2vw 0.1vw rgba(0, 0, 0, 0.833)";
  Medium.style.textShadow = "0vw 0vw 0.1vw rgba(0, 0, 0, 0.833)";
  easy.style.textShadow = "0vw 0vw 0.1vw rgba(0, 0, 0, 0.833)";

  easy.style.height = "5vw";
  Medium.style.height = "5vw";
  NebulaXyield.style.height = "6vw";

});




//------------------

var EasyCourse = document.getElementById("EasyCourse"); 

var ti1 = document.getElementById("t1");
var ti2 = document.getElementById("t2");
var Levels = document.getElementById("LevelIndex");
var EasyDiv = document.getElementById("EasyDiv");
var course1 = document.getElementById("course1");
var logo = document.getElementById("logo");
var logo2 = document.getElementById("logo2");
var content1 = document.getElementById("content1");
var body = document.getElementById("body");
var audioCourse1 = document.getElementById("audioCourse1");
var AudioOn1 = document.getElementById("AudioOn1");
var AudioOn12 = document.getElementById("AudioOn12");
var progressDiv = document.getElementById("progressDiv");
var comTask = document.getElementById("comTask");
var points000 = document.getElementById("points")
var video = document.getElementById("videoBG");


EasyCourse.addEventListener("click", function(){
    ti1.style.display = "none";
    ti2.style.display = "none";
    Levels.style.display = "none";
    EasyDiv.style.display = "none";
    logo.style.display = "none";
    /*Back.style.display = "block";
    Next.style.display = "block"; */
    course1.style.display = "block";
    logo2.style.display = "block";
    content1.style.display = "block";
    body.style.backgroundColor = "black";
    audioCourse1.style.display = "none";
    AudioOn1.style.display = "block";
    AudioOn12.style.display = "block";
    progressDiv.style.display = "block";
    comTask.style.display = "block"; 
    points000.style.display = "block";
    videoBG.style.display="none";
    

});

//---------------------------------------------------------------------------------------

//MTMSK
var MTMSK = document.getElementById("MTMSK");
var address;
var task11 = document.getElementById("task11");
var progress = document.getElementById("progress");
var NumProgress = 1;

var PointsDiv = document.getElementById("points");
var PointsNum = 0;

function pauseAudio() {
  if (audio1.paused) {
    audio1.play();
  } else {
    audio1.pause();
    
  }
}


const Connect = async () => {

    if (clickPlayAudio1 == true) {
      pauseAudio();
    }

  if (window.ethereum !== "undefined") {
    try {
      const accountsArray = await ethereum.request({
        method: "eth_requestAccounts",
      });
      address = accountsArray[0];
      document.getElementById("MTMSK").innerHTML = "Connected";
      MTMSK.style.backgroundColor = "rgb(19 176 0 / 81%)";

      MTMSK.disabled = true;

      document.getElementById("account").textContent = "This is your Public Address: " + address;

      PointsNum = PointsNum + 100;
      
      document.getElementById("numPoints").innerHTML = "" + PointsNum;

      task11.style.display = "block";
      NumProgress = NumProgress + 2;
      progress.style.width = NumProgress+"%";
      document.getElementById("perc0").innerHTML = NumProgress+"%";
      task11.scrollIntoView({ behavior: "smooth" });

     if(clickPlayAudio1 == true){ pauseAudio(); }
     console.log(address);
     changebgcolorPoints();

    } catch (error) {
      console.error(error);
    }
  } else {
    window.open("https://metamask.io/download.html", "_blank");
    console.log("Metamask no está disponible");
  }
};

const refresh = async () => {
  const accountsArray = await ethereum.request({
    method: "eth_requestAccounts",
  });
  address = accountsArray[0];
  

  document.getElementById("account").textContent ="This is your Public Address: " + address;
};


// Añadir REDES a METAMASK

//POLYGON

var addPolygon = document.getElementById("addPolygon");
var SwitchPolygon = document.getElementById("SwitchPolygon");
var task12 = document.getElementById("task12");

addPolygon.addEventListener("click", async () => {
  const provider = window.ethereum;

  if (provider) {
    try {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x89", // ChainID de la red de Polygon (Matic Mainnet)
            chainName: "Polygon Mainnet",
            rpcUrls: ["https://polygon.llamarpc.com"], // URL RPC de la red de Polygon
            nativeCurrency: {
              name: "MATIC",
              symbol: "MATIC",
              decimals: 18,
            },
            blockExplorerUrls: ["https://polygonscan.com/"], // URL del explorador de bloques de Polygon
          },
        ],
      });

      addPolygon.disabled = true;
      addPolygon.style.backgroundColor="rgb(19 176 0 / 81%)";
      task12.style.display = "block";
      PointsNum = PointsNum + 100
      console.log("points" , PointsNum);
      document.getElementById("addPolygon").innerHTML = "Done!";
      document.getElementById("numPoints").innerHTML = "" + PointsNum;
      NumProgress = NumProgress + 3; 
      progress.style.width = NumProgress+"%";
      document.getElementById("perc0").innerHTML = NumProgress+"%";
      
        console.log(
          "La red de Polygon se ha agregado a Metamask correctamente."
        );
        
    } catch (error) {
      console.error("Error al agregar la red de Polygon a Metamask:", error);
    }
    
  } else {
    console.error("No se ha encontrado una instancia de Metamask.");
  }

  
});

var switchPolygon = document.getElementById("SwitchPolygon");

function switchToPolygonNetwork() {
  ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x89" }], 
    })
    .then(() => {
      switchPolygon.disabled = true;
      console.log("Se cambió correctamente a la red de Polygon");
      PointsNum = PointsNum + 100;
      document.getElementById("SwitchPolygon").innerHTML = "Done!";
      document.getElementById("numPoints").innerHTML = "" + PointsNum;
      switchPolygon.style.backgroundColor = "rgb(19 176 0 / 81%)";
      NumProgress = NumProgress + 5;
      progress.style.width = NumProgress + "%";
      document.getElementById("perc0").innerHTML = NumProgress + "%";
      

    })
    .catch((error) => {
      console.error("Error al cambiar a la red de Polygon:", error);
    });
}


//ARBITRUM

var task13 = document.getElementById("task13");
var addArbitrum = document.getElementById("addArbitrum");

addArbitrum.addEventListener("click", async () => {
  const provider2 = window.ethereum;

  if (provider2) {
    try {
      await provider2.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xa4b1",
            chainName: "Arbitrum One",
            rpcUrls: ["https://arb1.arbitrum.io/rpc"],
            nativeCurrency: {
              name: "ETH",
              symbol: "ETH",
              decimals: 18,
            },
            blockExplorerUrls: ["https://arbiscan.io/"],
          },
        ],
      });
      addArbitrum.disabled = true;
      addArbitrum.style.backgroundColor = "rgb(19 176 0 / 81%)";
      PointsNum = PointsNum + 100
      document.getElementById("addArbitrum").innerHTML = "Done!";
      document.getElementById("numPoints").innerHTML = "" + PointsNum;
      task13.style.display = "block";
      NumProgress = NumProgress + 3;
      progress.style.width = NumProgress + "%";
      document.getElementById("perc0").innerHTML = NumProgress + "%";
        console.log(
          "La red de Arbitrum se ha agregado a Metamask correctamente."
        );
    } catch (error) {
      console.error("Error al agregar la red de Arbitrum a Metamask:", error);
    }
    
  } else {
    console.error("No se ha encontrado una instancia de Metamask.");
  }
});



//BSC

var task14 = document.getElementById("task14");
var addBSC = document.getElementById("addBSC");

addBSC.addEventListener("click", async () => {
  const provider3 = window.ethereum;

  if (provider3) {
    try {
      await provider3.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x38",
            chainName: "Binance Smart Chain Mainnet",
            rpcUrls: ["https://1rpc.io/bnb"],
            nativeCurrency: {
              name: "BNB",
              symbol: "BNB",
              decimals: 18,
            },
            blockExplorerUrls: ["https://bscscan.com"],
          },
        ],
      });
      addBSC.disabled = true;
      addBSC.style.backgroundColor = "rgb(19 176 0 / 81%)";
      PointsNum = PointsNum + 100;
      document.getElementById("addBSC").innerHTML = "Done!";
      document.getElementById("numPoints").innerHTML = "" + PointsNum;
      task14.style.display = "block";
      NumProgress = NumProgress + 4;
      progress.style.width = NumProgress + "%";
      document.getElementById("perc0").innerHTML = NumProgress + "%";
        console.log(
          "La red de Binance se ha agregado a Metamask correctamente."
        );
    } catch (error) {
      console.error("Error al agregar la red de Binance a Metamask:", error);
    }
    
  } else {
    console.error("No se ha encontrado una instancia de Metamask.");
  }
});



// AUDIO

const audio1 = document.getElementById("audioCourse1");
var MetamaskInstall = document.getElementById("MetamaskInstall");
var Fund = document.getElementById("Fund");
var addNet = document.getElementById("addNet");
var clickPlayAudio1 = false;
var clickPlayAudio1Num = 0;
var AudioOff1 = document.getElementById("AudioOff1");
var AudioOff12 = document.getElementById("AudioOff12");


AudioOff1.addEventListener("click", function(){
  audio1.pause();
  AudioOn1.style.display = "block";
  AudioOff1.style.display = "none";
  clickPlayAudio1 = false;
  AudioOn12.style.display = "block";
  AudioOff12.style.display = "none";

  mark1.style.display = "none";
  mark2.style.display = "none";
  mark3.style.display = "none";
  mark4.style.display = "none";
  mark5.style.display = "none";
  

})

AudioOn1.addEventListener("click", function(){
    clickPlayAudio1 = true;
    clickPlayAudio1Num++;
    if (audio1.paused) {
      audio1.play();
      AudioOn1.style.display = "none";
      AudioOff1.style.display = "block";
      AudioOff12.style.display = "block";
      AudioOn12.style.display= "none";
      
    } 
   
});

function bgcolorPlayAudio() {
  if (clickPlayAudio1 = true && audio1.paused) {
    AudioOn1.style.backgroundColor = "blue";
    
  }
}

var contbut1 = document.getElementById("contbut1");
var contbut2 = document.getElementById("contbut2");
var contbut3 = document.getElementById("contbut3");
var contbut4 = document.getElementById("contbut4");
var contbut5 = document.getElementById("contbut5");
var mark1 = document.getElementById("mark1");
var mark2 = document.getElementById("mark2");
var mark3 = document.getElementById("mark3");
var mark4 = document.getElementById("mark4");
var mark5 = document.getElementById("mark5");



audio1.addEventListener("timeupdate", () => {
  const currentTime = audio1.currentTime;

  if (currentTime < 5) {
    wid.scrollIntoView({behavior: "smooth"});
    if (clickPlayAudio1 == true) {
      

      mark1.style.display = "block";
      mark2.style.display = "none";
      mark3.style.display = "none";
      mark4.style.display = "none";
      mark5.style.display = "none";
    }
  } else if (currentTime >= 5 && currentTime < 10) {
    MetamaskInstall.scrollIntoView({ behavior: "smooth" });
    if (clickPlayAudio1 == true) {
      
      mark1.style.display = "none";
      mark2.style.display = "block";
      mark3.style.display = "none";
      mark4.style.display = "none";
      mark5.style.display = "none";
    }
  } else if (currentTime >= 10 && currentTime < 13) {
    MTMSK.scrollIntoView({ behavior: "smooth" });
    if (clickPlayAudio1 == true) {
      
      mark1.style.display = "none";
      mark2.style.display = "none";
      mark3.style.display = "block";
      mark4.style.display = "none";
      mark5.style.display = "none";
    }
  } else if (currentTime >= 13 && currentTime < 17) {
    addNet.scrollIntoView({ behavior: "smooth" });
    if (clickPlayAudio1 == true) {
      

      mark1.style.display = "none";
      mark2.style.display = "none";
      mark3.style.display = "none";
      mark4.style.display = "block";
      mark5.style.display = "none";
    }
  } else if (currentTime >= 17) {
    Fund.scrollIntoView({ behavior: "smooth" });
    if (clickPlayAudio1 == true) {

      mark1.style.display = "none";
      mark2.style.display = "none";
      mark3.style.display = "none";
      mark4.style.display = "none";
      mark5.style.display = "block";
    }
  }
});



function pauseAudio1b(){
  audio1.pause();
  mark1.style.display = "none";
  mark2.style.display = "none";
  mark3.style.display = "none";
  mark4.style.display = "none";
  mark5.style.display = "none";
}
function playAudio1b() {
  audio1.play();
}


document.addEventListener("visibilitychange", function () {
    if (clickPlayAudio1 == true && document.visibilityState === "hidden") {
      pauseAudio1b();
    } else if (document.visibilityState !== "hidden" && clickPlayAudio1Num > 0 && clickPlayAudio1 == true) {
      audio1.play();
    }
  });


window.addEventListener("blur", function(){
  if (!audio1.paused && clickPlayAudio1 == true) {
    pauseAudio1b();
  }
})   

window.addEventListener("focus", function () {
  if (audio1.paused && clickPlayAudio1 == true) {
    playAudio1b();
  }
});   





//_-------------------------------------------------------
// Comprobar si se tiene al menos 1 Matic.

const web3 = new Web3("https://rpc-mainnet.maticvigil.com");
var walletFunded = false;
var balanceMatic;


// Función para verificar el saldo de Matic de una dirección
async function checkMaticBalance(address) {
  try {

    balanceWei = await web3.eth.getBalance(address);

    balanceMatic = web3.utils.fromWei(balanceWei, "ether");

    if (Number(balanceMatic) >= 1) {
      console.log("La dirección tiene al menos 1 Matic");
      walletFunded = true;
      PointsNum = PointsNum + 100;
      document.getElementById("numPoints").innerHTML = "" + PointsNum;
      NumProgress = NumProgress + 5;
      progress.style.width = NumProgress + "%";
      document.getElementById("perc0").innerHTML = NumProgress + "%";
      console.log("Matic in wallet "+walletFunded);
    } else {
      console.log("La dirección no tiene suficiente saldo de Matic");
      walletFunded = false;
      console.log(walletFunded);
    }
  } catch (error) {
    console.error("Error al verificar el saldo de Matic:", error);
  }
}

function callCheck() { 
checkMaticBalance(address);
}

var Interval = setInterval(callCheck, 10000);

function stopInterval(){ 
  if(balanceMatic >= 1){ 
    clearInterval(Interval);
    console.log("Func Stop. ya se ha parado el intervalo de check")
    clearInterval(callStop);
  }
}

var callStop = setInterval(stopInterval, 5000);





//video

var video = document.getElementById("videoBG");
video.playbackRate = 0.75;



  ///////////////////////////////////////////////////////////////////
 ///////////////////////////// EFECTOS /////////////////////////////
///////////////////////////////////////////////////////////////////




