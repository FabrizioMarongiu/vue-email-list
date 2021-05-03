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
        this.generaMail();
    },
    methods:{

        // assegnaMail(){

        //     this.mails.forEach((element) => {

        //         generaMail(){
        //             axios.get(' https://flynn.boolean.careers/exercises/api/random/mail ')
        //             .then (response => {
        //                 response.data.response;
        //             })
        //             .catch(error => {
        //                 console.log('Errore: ', error);

        //             })
        //         }
                

        //     })
        //     console.log(this.mails)
        // },

        generaMail(){
            axios.get(' https://flynn.boolean.careers/exercises/api/random/mail ')
            .then (response => {
                // this.mails.forEach(mail =>{
                //   mail =   response.data.response
                // })
                console.log(response.data.response)
                
            })
            .catch(error => {
                console.log('Errore: ', error)
            });
        },
     },
});