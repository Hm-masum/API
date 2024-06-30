const user={id:1, name: 'sallu vai', job:'Actor'}
const stringified=JSON.stringify(user)
console.log(user)
console.log(stringified)


const shop={
    owner:'Alia',
    address:{
        street:'kochu ket',
        city: 'ranbir',
        country: 'BD'
    },
    products:['laptop','mac','monitor'],
    reveneu:11111,
    isOpen:true,
    isNew: false
}
const shopJson=JSON.stringify(shop)
console.log(shop)
console.log(shopJson)
const shopObj=JSON.parse(shopJson)
console.log(shopObj)