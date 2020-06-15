<template>
    <div>
        <ul>
            <li>{{this.userName}}</li>
            <li @click="logOut">Logout</li>
        </ul>
    </div>
</template>
<script>
import {mapGetters , mapMutations} from "vuex"
export default {
    name:"logout",
    data(){
        return{
            cliName:''
        }
    },
    beforeMount(){
this.updateStore()
    },
    computed:{
        ...mapGetters(["userName"])
    },
    methods:{
        ...mapMutations(['updateStore']),
        logOut(){
            localStorage.removeItem('user')            
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>
    ul{
        list-style-type: none;
        display: flex;
    }
    li{
        padding: 0 20px;
        
    }
    li:last-child{
cursor: pointer;
    }
</style>