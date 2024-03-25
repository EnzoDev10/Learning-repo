// Type coercion refers to the automatic conversion of values from one data type to another,
// typically performed during operations or comparisons involving different data types.

let x;

x = 5 + "5"; // "5" gets converted to his numeric counterpart

x = 5 + Number("5"); // This is a representation of what's going on behind

x = 5 * "5"; // This also applies to other operators

x = 5 + null; // Null gets converted to 0

x = 5 + true; // On the other hand, true is converted to 1

x = 5 + false; // False is equal to 0

x = 5 + undefined; // undefined gets converted to NaN as it doesn't have any value
