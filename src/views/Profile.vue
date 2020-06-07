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
                <div class="col-6">{{user.name}}</div>
                <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="email"><img src="../assets/email.png" style="width:18px; height: 18px ;" class="mr-2"><span >信箱</span></div> </div>
                <div class="col-6">{{user.email}}</div>
                <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="address"><img src="../assets/address.png" style="width:18px; height: 18px ;" class="mr-2"><span >地址</span></div> </div>
                <div class="col-6">{{user.address}}</div>
                 <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="phone"><img src="../assets/phone.png" style="width:18px; height: 18px ;" class="mr-2"><span >手機</span></div> </div>
                <div class="col-6">{{user.phone}}</div>
                 <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="key"><img src="../assets/key.png" style="width:18px; height: 18px ;" class="mr-2"><span >修改密碼</span></div> </div>
                <div class="col-6">  <button  class="btn btn-primary mt-2" style="display: block">送出審核信</button></div>
                 <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="key"><img src="../assets/account.png" style="width:18px; height: 18px ;" class="mr-2"><span >審核帳號</span></div> </div>
                <div class="col-6">
                 <img src="../assets/check.png" style="width:18px; height: 18px ;">
                 <img src="../assets/cross.png" style="width:18px; height: 18px ;">
                </div>
                 <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="key"><img src="../assets/history.png" style="width:18px; height: 18px ;" class="mr-2"><span >歷史紀錄</span></div> </div>
                <div class="col-6 mb-5">  <router-link to="/History"  class="btn btn-danger mt-2" style="display: block ; width:100px">查看</router-link></div>
             
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
    let Customer = db.auth().currentUser;
    let uid;
    if( Customer !=null){
        uid=Customer.uid;

    }
    return{
      users:[],
      uid
    }
  },
  firestore() {
        let users = fstore.collection('Customer').where('uid', '==', this.uid);
        return{
           users 
        }
        
         
    }
}
</script>

<style>

</style>