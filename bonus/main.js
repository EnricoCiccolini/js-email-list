console.log( 'ciao')


/*Descrizione
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/



const mailElement = document.getElementById('mail')

const RandMail = 'https://flynn.boolean.careers/exercises/api/random/mail'



let  mail = ''






for(let i = 0 ; i< 10 ; i++){



axios.get(RandMail).then((response) =>{
      
mail = mail + `<li class="list-group-item">${response.data.response}</li>` 
 
 console.log(mail)     
mailElement.innerHTML = mail
    
} )
.catch(error => {
    console.log("errore ")
})    



}


