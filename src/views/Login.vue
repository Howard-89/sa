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
                 
                  <div class="form-group " style="font-size: 13px;">
                    <div class="form-check text-center mt-5">
                      <input class="form-check-input" type="checkbox" id="gridCheck">
                      <label class="form-check-label " for="gridCheck">
                        我已閱讀完畢並接受<span style="font-weight:bold;"> 服務條款</span> 及 <span style="font-weight:bold;"> 隱私權政策</span> 
                      </label> 
                    </div>
                  </div>
                  <button  class="btn btn-danger mx-auto mt-4" style="display: block" @click="login">登入</button>
                  <h3 class="text-center mt-4 mb-4" style="font-size: 13px;">還不是會員？請快點<router-link style="color: red;" to="/signin">註冊</router-link>吧！</h3>
                </div>
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