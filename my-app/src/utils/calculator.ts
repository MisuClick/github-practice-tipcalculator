// Calculate the tip amount per person
export function calculateTipPerPerson(bill: number, tipPercent: number, people: number): number {
  if (!bill || !people || people <= 0) return 0;
  return (bill * (tipPercent / 100)) / people;
}

// Calculate the total amount per person (bill + tip)
export function calculateTotalPerPerson(bill: number, tipPercent: number, people: number): number {
  if (!bill || !people || people <= 0) return 0;
  return bill / people + calculateTipPerPerson(bill, tipPercent, people);
}
