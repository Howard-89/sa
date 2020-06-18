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
                <div class="col-3"> <div class="key"><img src="../assets/key.png" style="width:18px; height: 18px ;" class="mr-2"><span >審核單位</span></div> </div>
                <div class="col-4 ">  <router-link to="/Check"  class="btn btn-primary mt-2" style="display: block; width:100px">審核</router-link></div>
                 <div class="col-3" style="margin-bottom:10px;"></div>

                <div class="col-3"> <div class="key"><img src="../assets/key.png" style="width:18px; height: 18px ;" class="mr-2"><span >修改資料</span></div> </div>
                <div class="col-4 ">  <router-link to="/Modify"  class="btn btn-success mt-2" style="display: block; width:100px">修改資料</router-link></div>
                <div class="col-3" style="margin-bottom:10px;"></div>

                 <div class="col-3"> <div class="key"><img src="../assets/key.png" style="width:18px; height: 18px ;" class="mr-2"><span >修改密碼</span></div> </div>
                <div class="col-4 ">  <button @click="reset(user.email)" class="btn btn-success mt-2" style="display: block ; width:100px">修改密碼</button></div>
                <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="key"><img src="../assets/history.png" style="width:18px; height: 18px ;" class="mr-2"><span >歷史紀錄</span></div> </div>
                <div class="col-6 mb-5">  <router-link to="/History"  class="btn btn-danger mt-2" style="display: block ; width:100px">查看</router-link></div>
               
             
            </div>
               
                
              
           

             

            </div>
        </div>
            <div class="footer">
             <div class="row" >
            <div class="col-sm-4 mb-4" style="color:white">
                <div class="mt-5 mb-4 ml-5">友站連結：</div>
                <div class="mb-4  ml-5"><a href="http://igoods.tw/Index/Index.aspx">igoods愛物資</a></div>
               <div class="mb-4  ml-5"> <a href="https://www.eden.org.tw/">伊甸社福基金會</a></div>
               <div class="mb-4  ml-5"><a href="http://www.fhl.org.tw/">信望愛智譨發展中心</a></div>
            </div>
            <div class="col-sm-4 mb-4">
                 <h3 style="color:white;" class="mt-5 mb-3 ml-4">愛心分享 :</h3>
                 <div class="mb-2  ml-4"><router-link class="nav-link" to="/donate" @click.native="closeMenu()">我要捐贈</router-link></div>
                 <div class="mb-2  ml-4">  <router-link class="nav-link" to="/public" @click.native="closeMenu()">公益單位合作</router-link></div>
                  <div class="mb-4  ml-4">  <router-link class="nav-link" to="/donation" @click.native="closeMenu()">我要捐款</router-link></div>
            </div>
            <div class="col-sm-4 mb-4" style="color:white">
                <div class="mt-5 mb-4 ml-5">服務專線：(02)-29977909</div>
                <div class="mb-4 ml-5">地址：台北市大安區民正路120號</div>
               <div class="mb-4 ml-5">信箱：ilovedonation@gmail.com</div>
               <div class="mb-4 ml-5">營業時間：週一～週五 上午9:00~下午5:30</div>
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
        uid
        }
    },
    firestore() {
        let users = fstore.collection('Customer').where('uid', '==', this.uid);
        return{
        users 
        }
    },
    methods:{
        reset(email){
            db
                .auth()
                .sendPasswordResetEmail(email)
                .then(()=>{
                    alert("請前往信箱進行密碼重設!!")
                })
        }
    }
    
}
</script>

<style>

</style>