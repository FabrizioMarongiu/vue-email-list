const app = new Vue ({
    el: '#app',
    data: {

        mails: [
             
         ],
        
    },
    computed:{

        showMail(){
            if( this.mails.length >= 10){
            return true;
        }

        return false;
    }
    },
    created(){
        this.assegnaMail();
    },
    methods:{

        assegnaMail(){

            for( let i =0; i < 10; i++ ){
                
                axios.get(' https://flynn.boolean.careers/exercises/api/random/mail ')
                .then (response => {
                this.mails.push(response.data.response);
                // console.log(this.mail)
                })
                .catch(error => {
                console.log('Errore: ', error)
                });
            }
            
            console.log(this.mails)
        },

       
    },
    
});