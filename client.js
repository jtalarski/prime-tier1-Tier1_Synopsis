$( document ).ready( readyNow );

const budget = 25000;
let purchases = [];

function addPurchase() {
  console.log('in addPurchase');
  // get user input create new object
  let newPurchase = {
    name: $( '#purchaseNameIn' ).val(),
    price: $( '#purchasePriceIn' ).val()
  }
  purchases.push( newPurchase );
  // push the new purchase into the array
  // empty the inputs. make statements no space between quote
   $( '#purchaseNameIn' ).val('');
   $( '#purchasePriceIn' ).val('');
  // calculate remaining budget
  calculateRemaingBudget ();
  // update DOM
  displayPurchases();
} // end addPurchase

function calculateRemaingBudget() {
  console.log('in calculateRemaingBudget');
  // loop through purchases array
  let totalPrices = 0;
  for (i = 0; i< purchases.length; i++) {
    // for each purchase, add up total of all prices
    totalPrices += Number(purchases [ i ].price);
  } // end for loop
  console.log( 'totalPrices: ', totalPrices );
  // subtract totalPrices from budget for remainingBudget
  const remainingBudget = budget - totalPrices;
  // display remainingBudget
  let el = $( '#remainingBudgetOut' );
  el.empty();
  el.append( remainingBudget);
} // end calculateRemaingBudget

function displayPurchases() {
  console.log( ' in displayPurchases' );
  // target output by id
  let el = $( '#purchasesOut' );
  // empty
  el.empty();
  // loop through purchases array
  for ( purchase of purchases ) {
    // for each purchase, create a list item
    el.append( `<li>` + purchase.name + `: $` + purchase.price +`</li>` );
  } // end for loop
} //end displayPurchases



function readyNow () {
  // display budget
  // target budgetOut by id
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
  // handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase );
  //init display
  calculateRemaingBudget();
} // end readyNow
