<template>
  <div style="height:500px" >
        <div class="main py-5" style="background-color: rgb(246, 233, 205);">
            <div class="border border-dark shadow  mb-5 bg-white rounded mx-auto" style=" width: 65%;">
                <div class="form-row mx-0 mb-4"
                    style="background-color:rgb(48, 172, 85); width: 100%; height: 50px ;color:rgb(255, 255, 255);">
                    <div class="mt-3 mx-auto">個人資訊</div>
                </div>
  
            <img src="../assets/user.png" class="card-img-top" style="width:150px; height: 150px ;">
            <hr>
            <div class="row" style="text-align:left;line-height:70px;" v-for="(user, idx) in users" :key="idx" >
                <div class="col-3 mt-5" ></div>
                <div class="col-3"> <div class="name"><img src="../assets/name.png" style="width:18px; height: 18px ;" class="mr-2">姓名</div> </div>
                <div class="col-6"><input type="text" style="width:200px; height:35px;" v-model="name"></div>
                <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="address"><img src="../assets/address.png" style="width:18px; height: 18px ;" class="mr-2"><span >地址</span></div> </div>
                <div class="col-6"><input type="text" style="width:200px; height:35px;" v-model="address"></div>
                 <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="phone"><img src="../assets/phone.png" style="width:18px; height: 18px ;" class="mr-2"><span >手機</span></div> </div>
                <div class="col-6"><input type="text" style="width:200px; height:35px;" v-model="phone"></div>
                <button class="btn btn-primary mt-4" style="display:block; margin:0 auto;"  @click="enter">修改完成</button>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
import { db } from '../db'
const fstore = db.firestore()
export default {
    data(){
        let currentUser = db.auth().currentUser;
        let uid = ( currentUser !== undefined) ? currentUser.uid : '';
        return{
            users:[],
            uid,
            name:'',
            address:'',
            phone:''
        }
    },
    firestore() {
        let users = fstore.collection('Customer').where('uid', '==', this.uid);
        return{
           users 
        }  
    },
    methods:{
        enter(){
            fstore.collection('Customer').doc(this.uid).update({
                name: this.name,
                phone: this.phone,
                address: this.address,
            }).then(()=>{
                alert("修改完成!!")
                this.$router.push(`/profile`)
            })

        }
    }
}
</script>

<style>

</style>