const d = new Date();
document.getElementById('date').innerHTML = d;

let Ajayi = document.getElementById('Ajayi'); // 12 pnts - changed on 13/09/2022
let Alabi = document.getElementById('Alabi'); //6 pnts
let Elisha = document.getElementById('Elisha'); // 7 pnts
let Anatu = document.getElementById('Anatu'); // 6 pnts changed on 13/09/2022
let Andrew = document.getElementById('Andrew'); // 10
let Tosin = document.getElementById('Tosin'); //5
let Sola = document.getElementById('Sola'); //6 changed on 13/09/2022
let Abiodun = document.getElementById('Abiodun'); // 9
let Lawrence = document.getElementById('Lawrence'); // 7
let Ogundairo = document.getElementById('Ogundairo'); //10
let Adams = document.getElementById('Adams'); //6
let Victor = document.getElementById('Victor'); // 5

let how = document.getElementById('how');
let howItIs = document.getElementById('howitis');
let hideHowItIs = document.getElementById('hideHowItIs');
hideHowItIs.style.display = 'none';
function total() {
  let totalPoints = 91;
  let billInput1 = document.getElementById('bill1').value || 0;
  let billInput2 = document.getElementById('bill2').value || 0;
  let totalBillDisplayArea = document.getElementById('total');
  let totalBillButton = document.getElementById('totalButton');
  let totalBills = parseFloat(billInput1) + parseFloat(billInput2);
  //Calc the current month to show the user
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  currentMonth = months[currentMonth];
  let currentYear = new Date();
  currentYear = currentYear.getFullYear();
  let previousMonth = months[currentDate.getMonth() - 1];

  totalBillDisplayArea.textContent = `This bill for ${currentMonth}, ${currentYear} is: ${totalBills}`;
  document.getElementById(
    'currentMonth'
  ).textContent = `This is the bill electricity used in ${previousMonth}`;
  if (totalBills > 0) {
    amountPerPoint = totalBills / totalPoints;
  }

  Ajayi.textContent =
    "Ajayi's Electric Bill (12 Points) is: N" +
    Math.floor(amountPerPoint * 12 + 1).toLocaleString();
  Alabi.textContent =
    "Alabi's Electric Bill (6 Points) is: N" +
    Math.floor(amountPerPoint * 6 + 1).toLocaleString();
  Elisha.textContent =
    "Elisha's Electric Bill (7 Points) is: N" +
    Math.floor(amountPerPoint * 7 + 1).toLocaleString();
  Anatu.textContent =
    "Anatu's Electric Bill (6 Points) is: N" +
    Math.floor(amountPerPoint * 6 + 1).toLocaleString();
  Andrew.textContent =
    "Andrew's Electric Bill (10 Points) is: N" +
    Math.floor(amountPerPoint * 10 + 1).toLocaleString();
  Tosin.textContent =
    "Tosin's Electric Bill (5 Points) is: N" +
    Math.floor(amountPerPoint * 5 + 1).toLocaleString();
  Sola.textContent =
    "Sola's Electric Bill (6 Points) is: N" +
    Math.floor(amountPerPoint * 6 + 1).toLocaleString();
  Abiodun.textContent =
    "Abiodun's Electric Bill (9 Points) is: N" +
    Math.floor(amountPerPoint * 9 + 1).toLocaleString();
  Lawrence.textContent =
    "Lawrence's Electric Bill (7 Points) is: N" +
    Math.floor(amountPerPoint * 7 + 1).toLocaleString();
  Ogundairo.textContent =
    "Ogundairo's Electric Bill (10 Points) is: N" +
    Math.floor(amountPerPoint * 10 + 1).toLocaleString();
  Adams.textContent =
    "Adams' Electric Bill (6 Points) is: N" +
    Math.floor(amountPerPoint * 6 + 1).toLocaleString();
  Victor.textContent =
    "Victor's Electric Bill (5 Points) is: N" +
    Math.floor(amountPerPoint * 5 + 1).toLocaleString();

  //// Math.floor( .... + 1) to round off the amount without decimals and add 1 to avoid financial loss on our side. toLocalString() adds the comma to make it a readable thousand
}

how.addEventListener('click', function () {
  howItIs.innerHTML = `<p>Hello. Thanks for asking. To calculate your personal bill </br>
Step 1:  Simply divide the total amount for bill as seen above by the total points of everyone.</br>
Step 2: Then use the result of step 1 to multiply your own points. </br>
Example: If the total bill for January is 20,500 and the total points for everyone is 90 Points </br>
 20500/90 = 229 approximately. If your point is 10. 229 x 10 = 2,290 Naira.
  </p>`;
  hideHowItIs.style.display = 'block';
});

hideHowItIs.addEventListener('click', function () {
  howItIs.textContent =
    'Thanks for reading. If you need more clarity or if you need a website or app, please call or whatsapp: +2347035719745 (@AnatuGreen) or chat the group';
  hideHowItIs.style.display = 'none';
});
