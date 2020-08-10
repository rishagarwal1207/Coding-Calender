
const axios= require('axios');
const {to} = require('await-to-js');
const ch= process.argv[2];

async function events(){
let [err,res]=await to(axios.get('https://clist.by/get/events/'))
if(err){console.log('Error found');}   
if(!res.data){console.log('File not found');}
console.log(ch);
const date= new Date(); 
console.log(date);
    switch(ch){
    case 'past':
        console.log('Past events');
        res.data.forEach(element => {
            let p= new Date(element.end);
            if(date>p){
                console.log(element);
                
            }
        });
        
        break;
    case 'Running':
        console.log('Running events');
        res.data.forEach(ele =>{
            let Run = new Date(ele.start);
            let Run1 = new Date(ele.end);
            if(date>=Run && date<=Run1)
                console.log(ele);
        });
        break;
    case 'Upcoming':
            console.log('Upcoming events');
            res.data.forEach(come=>{
                let up= come.start;
                if(up>date){
                    console.log(come);
                }
            });
            break;
    default: console.log('Invalid Event');
    }
}
events();