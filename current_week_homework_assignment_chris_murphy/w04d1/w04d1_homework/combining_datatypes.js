  /////////////////////////////////////
 /// Section 2 Combining Datatypes
//////////////////////////////////////
// Combine objects, arrays, and functions
// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
    crayons: ["green", "blue", "orange","purple","red","yellow", "violet", "indigo"]
};

console.log(crayonBox.crayons[1]);

// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: {
        material: "metal",
        color: "silver"
    }
}

console.log(bottle.cap.material);

// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [{name: "chicken", price: 5},{name: "lettuce", price: 1},{name: "peppers", price: 2},{name: "berries", price: 3}];

console.log(receipt[3].name);

// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [["joe", "chris", "tara", "lauren", "alex"],105,{street: "main", number: 18, crossStreet: "townline"}];

console.log(apartmentBuilding[0][3]);

