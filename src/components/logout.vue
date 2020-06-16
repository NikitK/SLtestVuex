<template>
    <div>
        <ul>
            <li>{{this.user.name}}</li>
            <li @click="logOut">Logout</li>
        </ul>
    </div>
</template>
<script>
import token from '@/utils/storage/token'
import {mapGetters} from "vuex"
export default {
    name:"logout",
    data(){
        return{
            cliName:''
        }
    },
    computed:{
        ...mapGetters(["user"])
    },
    methods:{
        logOut(){
            token.remove()
            this.$store.dispatch('logout');           
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