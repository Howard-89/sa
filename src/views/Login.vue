<template>
  <div class="login">
          <div class="main py-5" style="background-color: rgb(177, 193, 207);">
        <div class="row">
            <div class="col-sm-6" >
              <img src="../assets/img4.png" class="img-fluid mt-3 rounded" style="height: 550px;">
            </div>
            <div class="col-sm-6 p-3">
              <div class="border border-dark shadow  mb-5 bg-white rounded" >
                <div class="form-row mx-0" style="background-color:rgb(245, 116, 111); width: 100%; height: 50px ;color:white;" ><div class="mt-3 mx-auto" >舊愛贈會員登入</div></div>
                <div class="form-row px-3 pt-3">
                    <div class="form-group col-md-6 mx-auto mt-5">
                      <label for="email" class="mb-2">使用者信箱</label>
                      <input type="email" class="form-control" v-model="email">
                    </div>
                  </div>
                  <div class="form-row px-3 pt-3">
                    <div class="form-group col-md-6 mx-auto">
                      <label for="password" class="mb-2">請輸入密碼</label>
                      <input type="password" class="form-control" v-model="password">
                    </div>
                  </div>
                
                  <button  class="btn btn-danger mx-auto mt-4" style="display: block" @click="login">登入</button>
                  <h3 class="text-center mt-4 mb-4" style="font-size: 13px;">還不是會員？請快點<router-link style="color: red;" to="/signin">註冊</router-link>吧！</h3>
                </div>
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
import {db} from '../db'
export default {
  data(){
    return{
      email: '',
      password: '',
      error: ''
    }
  },
  methods:{
    login(){
      console.log(this.email)
      db
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data=>{
          console.log(data)
          this.$router.replace({name: "Home"})
        })
        .catch(err=>{
          this.error = err
        })
    }
  }
  
}
</script>