
const d = new Date();
document.getElementById("date").innerHTML = d;

let Ajayi = document.getElementById("Ajayi") // 13 pnts
let Alabi = document.getElementById("Alabi") //6 pnts
let Alex = document.getElementById("Alex") // 7 pnts
let Anatu= document.getElementById("Anatu") // 5 pnts
let Andrew = document.getElementById("Andrew") // 10
let Gbenga = document.getElementById("Gbenga") //7
let Janet = document.getElementById("Janet") //5
let Joshua = document.getElementById("Joshua") // 9
let Lawrence = document.getElementById("Lawrence") // 7
let Ogundairo = document.getElementById("Ogundairo") //10
let Taiwo = document.getElementById("Taiwo") //6

let how = document.getElementById("how")
let howItIs = document.getElementById("howitis")
let hideHowItIs = document.getElementById("hideHowItIs")

function total(){
    
    let totalPoints= 85
    let billInput1 = document.getElementById("bill1").value || 0
    let billInput2 = document.getElementById("bill2").value || 0
    let totalBillDisplayArea = document.getElementById("total")
    let totalBillButton = document.getElementById("totalButton")
    let totalBills = parseFloat(billInput1) + parseFloat(billInput2)
    totalBillDisplayArea.textContent = "This month's total bill is: " + totalBills
    if(totalBills >0){
        amountPerPoint = totalBills/totalPoints
    }

    Ajayi.textContent = "Ajayi's Electric Bill (13 Points) is: N" + Math.floor(amountPerPoint * 13 + 1).toLocaleString() 
    Alabi.textContent = "Alabi's Electric Bill (6 Points) is: N" + Math.floor(amountPerPoint * 6 + 1).toLocaleString()
    Alex.textContent = "Alex's Electric Bill (7 Points) is: N" + Math.floor(amountPerPoint * 7 + 1).toLocaleString()  
    Anatu.textContent = "Anatu's Electric Bill (5 Points) is: N" + Math.floor(amountPerPoint * 5 + 1).toLocaleString() 
    Andrew.textContent = "Andrew's Electric Bill (10 Points) is: N" + Math.floor(amountPerPoint * 10 + 1).toLocaleString() 
    Gbenga.textContent = "Gbenga's Electric Bill (7 Points) is: N" + Math.floor(amountPerPoint * 7 + 1).toLocaleString() 
    Janet.textContent = "Janet's Electric Bill (5 Points) is: N" + Math.floor(amountPerPoint * 5 + 1).toLocaleString() 
    Joshua.textContent = "Joshua's Electric Bill (9 Points) is: N" + Math.floor(amountPerPoint * 9 + 1).toLocaleString() 
    Lawrence.textContent = "Lawrence's Electric Bill (7 Points) is: N" + Math.floor(amountPerPoint * 7 + 1).toLocaleString() 
    Ogundairo.textContent = "Ogundairo's Electric Bill (10 Points) is: N" + Math.floor(amountPerPoint * 10 + 1).toLocaleString()
    Taiwo.textContent = "Taiwo's Electric Bill (6 Points) is: N" + Math.floor(amountPerPoint * 6 + 1).toLocaleString()

    //// Math.floor( .... + 1) to round off the amount without decimals and add 1 to avoid financial loss on our side. toLocalString() adds the comma to make it a readable thousand
}

how.addEventListener("click", 
function(){howItIs.innerHTML =`<p>Hello. Thanks for asking. To calculate your personal bill </br>
Step 1:  Simply divide the total amount for bill as seen above by the total points of everyone.</br>
Step 2: Then use the result of step 1 to multiply your own points. </br>
Example: If the total bill for January is 20,500 and the total points for everyone is 150 Points </br>
 20500/150 = 133.666. If your point is 10. 133.666 x 10 = 1,3666 </p>`
})

hideHowItIs.addEventListener("click", function(){
    howItIs.textContent ="Thanks for reading. If you need more clarity or if you need a website or app, please call or whatsapp: +2347035719745 (@AnatuGreen)"

})