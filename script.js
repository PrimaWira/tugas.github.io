const users =[{
    Brand: 'tesla',
    BBM: 'Pertamax',
    type: 'mobil listrik',
},
{
    Brand: 'Supra',
    BBM: 'pertamax Turbo',
    type: 'sport car',
}
]

let type = prompt ("masukan type")
const usersType = users.filter((user) => user.type === type);

console.log(usersType)