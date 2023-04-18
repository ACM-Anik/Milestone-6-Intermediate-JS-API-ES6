const shop = {
    owner: 'alia',
    address:{
        street: 'kochukhet lane', city: 'Dhaka', country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue : 45000,
    isOpen: true,
    isNew: false,
}
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);


// Quiz :
// What will be the output? 

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 
// output:undefined 
  