/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            emailArray: []
        }
    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                const curEmail = resp.data.response;
                this.emailArray.push(curEmail);
            });
        }
    }
}).mount('#app')