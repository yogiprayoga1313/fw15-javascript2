//    tugas 5.A (spread operator)
   const data1 = {nama: 'Yogi Prayoga'}
    const data2 = {emial: 'yogiprayoga1333@gmail.com'}
    const data3 = {Hobby: 'Badminton'}
    const newAddress ={
        newStreet :'jalan sadang 3 cilacap jawa tengah',
        newCity:'Cilacap'
    }
    const {newStreet, newCity} = newAddress
    const data = {...data1,...data2,...data3,...newAddress}
    console.log(data)

// tugas 5.B ( Destructring)

 let newData = {
    id: 1,
    name: 'Leanne Graham ',
    username:'Bret',
    email:'Sincare@april.biz',
    address:{
        street: 'Kulas Light',
        suite:'Apt.556',
        city:'Gwenborought',
        zipcode:'92998-3874',
    },
    phone:'1-770-735-8031 x56442',
    website:'Hidegared.org',

}

let {street, city}=newData.address
let hitAddress = {street, city}
console.log(hitAddress)



