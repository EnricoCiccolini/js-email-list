console.log( 'ciao')


/*Descrizione
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const RandMail = 'https://flynn.boolean.careers/exercises/api/random/mail'

axios.get(RandMail).then((response) =>{
    console.log(response)
} )
.catch(error => {
    console.log("errore ")
})