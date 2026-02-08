/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {

  if(serviceRating < 1 || !Number.isInteger(serviceRating) || serviceRating > 5 || billAmount <= 0) {
    return null;
  }

  // Your code here
  var tipPercentage = 0;
  switch (serviceRating) {
    case 1:
      tipPercentage = 0.05;
      break;
    case 2:
      tipPercentage = 0.10;
      break;
    case 3:
      tipPercentage = 0.15;
      break;
    case 4:
      tipPercentage = 0.20;
      break;
    case 5:
      tipPercentage = 0.25;
      break;
  }

  var cleanBill = Number(billAmount.toFixed(2));
  
  var rawTip = cleanBill * tipPercentage;

  var finalTipAmount = Number(rawTip.toFixed(2));

  var finalTotalAmount = Number((cleanBill + finalTipAmount).toFixed(2));

  return {
    tipPercentage : tipPercentage * 100,
    tipAmount: finalTipAmount,
    totalAmount: finalTotalAmount
  }
}
