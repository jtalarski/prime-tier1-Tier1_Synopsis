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
} // end addPurchase

function readyNow () {
  // display budget
  // target budgetOut by id
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
  // handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase );
} // end readyNow
