const app = new Vue ({
    el: '#app',
    data: {

        mails: [
             '',
             '',
             '',
             '',
             '',
             '',
             '',
             '',
             '',
             '',
         ],
        
    },
    created(){
        this.assegnaMail();
    },
    methods:{

        assegnaMail(){

            this.mails.forEach((element) => {

                element = this.generaMail();
                console.log(element)

            });
            console.log(this.mails)
        },

        generaMail(){
            axios.get(' https://flynn.boolean.careers/exercises/api/random/mail ')
            .then (response => {
                response.data.response
            })
            .catch(error => {
                console.log('Errore: ', error)
            });
        },
    },
});