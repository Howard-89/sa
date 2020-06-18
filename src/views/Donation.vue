<template>
    <div id="donation">
        <div class="main py-5" style="background-color: rgb(246, 233, 205);">
        <form>
            <div class="border border-dark shadow  mb-5 bg-white rounded mx-auto" style=" width: 65%;">
                <div class="form-row mx-0 mb-4"
                    style="background-color:rgb(48, 172, 85); width: 100%; height: 50px ;color:rgb(255, 255, 255);">
                    <div class="mt-3 mx-auto">捐款資訊</div>
                </div>
           
                <div class="form-row px-3 pt-3">
                    <div class="form-group col-md-6">
                        <label class="mb-2"><span style="color: red;">*</span>姓名</label>
                        <input type="text" name="message" class="form-control mr-sm-2" v-model="Name" id="inputName">                
                    </div>

        
                    <div class="form-group col-md-6">
                        <label class="mb-2"><span style="color: red;">*</span>捐贈機構名稱</label>
                        <select class="custom-select mr-sm-2" v-model="DonName">
                            <option v-for="(name, index) in Names" :key="index" selected >{{name.Name}}</option>   
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="mb-2"><span style="color: red;">*</span>捐款金額(台幣)</label>
                        <input type="number" min="0" value="0" class="form-control mr-sm-2" v-model="Money" id="inputMoney">                
                    </div>
                    <div class="form-group col-md-6">
                        <label class="mb-2">Email</label>
                        <input type="email" name="email" v-model="email" class="form-control mr-sm-2"  id="inputEmail">                
                    </div>
                    <div class="form-group col-md-6">
                        <label class="mb-2">行動電話</label>
                        <input type="text" name="phone" v-model="phone" class="form-control mr-sm-2" id="inputPhone">                
                    </div>
                    <div class="form-group col-md-6">
                        <label class="mb-2"><span style="color: red;">*</span>捐贈方式</label>
                        <select class="custom-select mr-sm-2" v-model="Donway">
                            <option value="creditcard" selected>信用卡支付</option>
                            <option value="atm">ATM轉帳</option>
                        </select>
                    </div>

                </div>

                 <div class="form-row mx-0 my-4"
                    style="background-color:rgb(48, 172, 85); width: 100%; height: 50px ;color:rgb(255, 255, 255);">
                    <div class="mt-3 mx-auto">收據開立資訊</div>
    
                </div>
                <div class="form-group px-3">
                    <label for="inputAddress" class="mb-2"><span style="color: red;">*</span>地址</label>
                    <input type="text" class="form-control" v-model="Address" id="inputAddress">
                </div>

                <input type="submit" class="btn btn-danger mx-auto mb-3" value="確認送出" style="display: block" @click.prevent="confirm" >
                
            </div>
       </form>
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
    const fstore = db.firestore()
    export default {
        data(){
        let uid = db.auth().currentUser.uid;
            return{
                Names:[],
                uid,
            }
        },
        firestore(){
            let Names = fstore.collection('confirm_name')
            return{
                Names
            }
        },
        methods:{
          confirm(){
            var errors = [];
            var today = new Date(Date.now()).toLocaleString();
            let uid = db.auth().currentUser.uid;
            if(this.Name && this.DonName && this.Money && this.Donway && this.Address){
                fstore.collection('donate').doc().set({
                    Name: this.Name,
                    DonName: this.DonName,
                    Money: this.Money,
                    Donway: this.Donway,
                    Phone: this.phone,
                    Email: this.email,
                    Address: this.Address,
                    Time: today,
                    Uid: uid,
                }).then(()=>{
                    this.$router.replace({name: "History"})
                })
            }
            if(!this.Name){
                errors.push('請填寫姓名');
                alert(errors);
            }
            else if(!this.DonName){
                errors.push('請選擇捐贈機構');
                alert(errors);
            }
            else if(!this.Money){
                errors.push('請填寫金額');
                alert(errors);
            }
            else if(!this.Donway){
                errors.push('請選擇捐贈方式');
                alert(errors);
            }
            else if(!this.Address){
                errors.push('請填寫發票地址');
                alert(errors);
            }
            

          }
        }
    }
</script>

<style>

</style>