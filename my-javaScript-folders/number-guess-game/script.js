let secrateNum = Math.floor(Math.random() * 50) + 1;
const btn = document.getElementById("check");
const message = document.getElementById("message");

btn.addEventListener("click", function(){
    let guess = Number(document.getElementById("userguess").value);
    if(guess === secrateNum){
        message.innerText =  "🎉🎉🎉🎊🎊 अरे वाह शेर! मान गए, बिल्कुल सही निशाना लगाया! आप जीत गए! 👑";
    } else {
        message.innerText = "अरे ओ गधे! गलत जवाब। दिमाग लगाओ, थोड़ा और अच्छा सोचो! 😜";
    };

})