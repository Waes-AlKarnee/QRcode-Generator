// const myBtn = document.getElementById("clickBtn");
// function gettingUserName() {
//   event.preventDefault();
//   const userFirstName = document.getElementById("userName").value;
//   const userPassword = document.getElementById("userPssword").value;
//   console.log(userFirstName, userPassword);
// }
// myBtn.addEventListener("click", gettingUserName);

const generateBtn = document.getElementById("generateBtn");

function gererateQR() {
  const userText = document.getElementById("userText").value;
  document.getElementById("userText").value = "";
  const userWidth = document.getElementById("width").value;
  document.getElementById("width").value = "";
  const userHeight = document.getElementById("height").value;
  document.getElementById("height").value = "";
  
  callingAPI(userText, userWidth, userHeight);
}

async function callingAPI(text, width, height) {
  console.log(width, height);
  const imageUrl = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${text}`
  );
  const myImage = document.getElementById("qrImage");
  myImage.src = imageUrl.url;
  //   const result = await imageUrl.json();
  //   console.log(imageUrl.url);
}

generateBtn.addEventListener("click", gererateQR);