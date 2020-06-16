<template>
    <div>
        <ul>
            <li>{{this.userName}}</li>
            <li @click="logOut">Logout</li>
        </ul>
    </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
    name:"logout",
    data(){
        return{
            cliName:''
        }
    },
    computed:{
        ...mapGetters(["userName"])
    },
    methods:{
        logOut(){
            localStorage.removeItem('user') 
            this.$store.commit('updateStore');           
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