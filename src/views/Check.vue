<template>
  <div style="height:500px" >
        <div class="main py-5" style="background-color: rgb(246, 233, 205);">
            <div class="border border-dark shadow  mb-5 bg-white rounded mx-auto" style=" width: 65%;">
                <div class="form-row mx-0 mb-4"
                    style="background-color:rgb(48, 172, 85); width: 100%; height: 50px ;color:rgb(255, 255, 255);">
                    <div class="mt-3 mx-auto">資料審查</div>
                </div>
  
            <img src="../assets/user.png" class="card-img-top" style="width:150px; height: 150px ;">
            <hr>
            <div class="row" style="text-align:left;line-height:70px;" v-for="(user, idx) in users" :key="idx" >
                <div class="col-3 mt-5" ></div>
                <div class="col-3"> <div class="name"><img src="../assets/name.png" style="width:18px; height: 18px ;" class="mr-2">公益單位名稱</div> </div>
                <div><input type="text " class="form-control"  style="display: block ; width:300px; height: 30px;margin-top:18px" v-model="unit"></div>
                <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="address"><img src="../assets/address.png" style="width:18px; height: 18px ;" class="mr-2"><span >地址</span></div> </div>
                <div><input type="text " class="form-control"  style="display: block ; width:300px; height: 30px;margin-top:18px" v-model="uaddress"></div><div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="phone"><img src="../assets/phone.png" style="width:18px; height: 18px ;" class="mr-2"><span >連絡電話</span></div> </div>
                <div><input type="text " class="form-control"  style="display: block ; width:300px; height: 30px;margin-top:18px" v-model="uphone"></div>              
                
                 <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="key"><img src="../assets/history.png" style="width:18px; height: 18px ;" class="mr-2"><span >確認</span></div> </div>
                <div class="col-6 mb-5"> <button @click="enter" class="btn btn-primary mt-2" style="display: block ; width:100px">確認</button></div>
             
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
        unit:'',
        uaddress:'',
        uphone:'',
        audit:true
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
                unit: this.unit,
                uaddress: this.uaddress,
                uphone: this.uphone ,
                audit: true
            }).then(()=>{
                this.$router.push(`/profile`)
            })
        },
    }
    
}
</script>


<style>

</style>