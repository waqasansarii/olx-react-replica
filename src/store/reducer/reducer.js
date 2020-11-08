
import alto from '../../images/Alto.jpg'
import mobImg from '../../images/mob-img-1.jpg'
import pent from '../../images/pent.jpg'
import shirt from '../../images/shirt.jpg'


const initial_state ={
    cards : [  {
    id: '0-mobile-30000',   
    price :'RS:3000',
    name : 'mobile',
    img : mobImg,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'
    

},
{
    id: '1-alto-30',   

    price :'RS : 30',
    name : 'car',
    img : alto,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'



},
{
    id: '2-alto-50000',   

    price :'RS : 50000',
    name : 'car',
    model :'alto',
    img : alto,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'



},
{
    id: '3-car-30000',   

    price :'RS : 30000',
    name : 'car',
    img : alto,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'



},
{
    id: '4-pent-600',   

    price :'RS : 600',
    name : 'pent',
    img : pent,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'



},
{
    id: '5-pent-700',   

    price :'RS : 700',
    name : 'pent',
    img : pent,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'



},
{
    id: '6-pent-500',   

    price :'RS : 500',
    name : 'pent',
    img : pent,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'



},
{
    id: '7-mob-4000',   

    price :'RS : 4000',
    name : 'mobile',
    model:'nokia',
    img : mobImg,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'



},
{
    id: '8-pent-500',   

    price :' RS : 500',
    name : 'pent',
    img : pent,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'



},
{
    id: '9-mob-6000',   

    price :'RS : 6000',
    name : 'mobile',
    img : mobImg,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'



},
{
    id: '10-pent-500',   

    price :'RS : 500',
    name : 'pent',
    img : pent,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'



},
{
    id: '11-mob-500',   

    price :'RS : 500',
    name : 'mobile',
    img : mobImg,
    description: 'lorem fjdsfsff k kjrfeior  jkdjfdkjf kljk ljkf  kjfkl djlkj fkldflk d',
    condition:'new'



},
],
// users:[
//     {name:'',img:'',uid:'',email:''}
// ]

}


export default (state=initial_state,action)=>{
    // console.log(action.data)
    // console.log(state.cards)
    
    let {name} =state.cards
    switch (action.type) {
        case 'SETDATA':

            return ({
                ...state,
                cards :[...state.cards,action.data]
            })
        default:
            return state ;
            
        }
        
    }