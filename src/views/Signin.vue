<template>
    <div id="signin">
        <div class="main py-5" style="background-color: rgb(246, 233, 205);">
          <div class="row">
              <div class="col-sm-6" >
                <img src="../assets/banner1.png" class="img-fluid mt-5 rounded" alt="Responsive image">
              </div>
              <div class="col-sm-6 p-3">
                <div class="border border-dark shadow  mb-5 bg-white rounded" >
                  <div class="form-row mx-0" style="background-color:rgb(245, 185, 74); width: 100%; height: 50px ;color:white;" ><div class="mt-3 mx-auto" >舊愛贈會員註冊</div></div>
                  <div class="form-row px-3 pt-3">
                      <div class="form-group col-md-6">
                        <label  class="mb-2">姓名</label>
                        <input type="text" class="form-control"  v-model="name">
                      </div>
                      <div class="form-group col-md-6">
                        <label class="mb-2">手機／市話</label>
                        <input type="text" class="form-control"  v-model="phone">
                      </div>
                    </div>
                    <div class="form-group px-3">
                      <label class="mb-2">信箱</label>
                      <input type="email" class="form-control"  placeholder="ilovedonation@gmail.com" v-model="email">
                    </div>
                    <div class="form-group px-3">
                      <label class="mb-2">住址</label>
                      <input type="text" class="form-control"  placeholder="台北市大安區民正路120號" v-model="address">
                    </div>
                    <div class="form-group px-3">
                    <label class="mb-2">密碼</label>
                    <input type="password" class="form-control"  placeholder="請輸入至少6個字元" v-model="pw">
                    </div>
                    <div class="form-group px-3">
                    <label class="mb-2">再次輸入密碼</label>
                    <input type="password" class="form-control"  placeholder="請輸入至少6個字元" v-model="repw">
                    </div>
                    <div class="form-group" style="font-size: 13px;">
                      <div class="form-check text-center">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                          我已閱讀完畢並接受<span style="font-weight:bold;"> 服務條款</span> 及 <span style="font-weight:bold;"> 隱私權政策</span> 
                        </label> 
                      </div>
                    </div>
                    <button class="btn btn-danger mx-auto" style="display: block" @click="signin">註冊</button>
                    <h3 class="text-center mt-2 mb-3" style="font-size: 13px;">已經是會員？請直接<router-link style="color: red;" to="/login">登入</router-link>吧！</h3>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer">
            <div class="row" >
                <div class="col-sm-4 mb-4" style="color:white">
                    <div class="tel mt-5 mb-4 ml-5">友站連結：</div>
                    <div class="adr mb-4  ml-5"><a href="http://igoods.tw/Index/Index.aspx">igoods愛物資</a></div>
                   <div class="mail mb-4  ml-5"> <a href="https://www.eden.org.tw/">伊甸社福基金會</a></div>
                   <div class="time mb-4  ml-5"><a href="http://www.fhl.org.tw/">信望愛智譨發展中心</a></div>
                </div>
                <div class="col-sm-4 mb-4">
                   <form action="" >
                     <h3 style="color:white;" class="mt-5 mb-4 ml-5">訂閱我們鎖定最新消息</h3>
                     <div class="form-group">
                      <input type="text" class="form-control mt-3 mb-4 ml-5" style="width: 200px;" id="inputAddress" placeholder="請輸入email">
                      <button type="submit" class="btn btn-warning mt-4 mb-4 ml-5" style="display: block">訂閱</button>
                    </div>
                   </form>

                </div>
                <div class="col-sm-4 mb-4" style="color:white">
                    <div class="tel mt-5 mb-4 ml-5">服務專線：(02)-29977909</div>
                    <div class="adr mb-4 ml-5">地址：台北市大安區民正路120號</div>
                   <div class="mail mb-4 ml-5">信箱：ilovedonation@gmail.com</div>
                   <div class="time mb-4 ml-5">營業時間：週一～週五 上午9:00~下午5:30</div>
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
            name:'',
            phone:'',
            email:'',
            address:'',
            pw:'',
            repw:''
        }
    },
    methods:{
        signin(){
            if(this.pw == this.repw){
                db
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.pw)
                    .then(()=>{
                        let user = db.auth().currentUser
                        const fdb = db.firestore()
                        fdb.collection('Customer').doc(user.uid).set({
                            name: this.name,
                            email: this.email,
                            phone: this.phone,
                            password: this.pw,
                            address: this.address,
                            audit: false,
                            uid: user.uid
                        }).then(()=>{
                            alert("註冊成功!!")
                            this.$router.replace({name: "Login"})
                        })
                    })
            }
        }
    }
}
</script>