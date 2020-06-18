<template>
    <div id="public">
        <div class="main py-5" style="background-color: rgb(246, 233, 205);">
            <div class="border border-dark shadow  mb-5 bg-white rounded mx-auto" style=" width: 65%;">
                <div class="form-row mx-0"
                    style="background-color:rgb(250, 127, 127); width: 100%; height: 50px ;color:rgb(0, 0, 0);">
                    <div class="mt-3 mx-auto">公益單位合作</div>
                </div>
                <div class="form-row px-3 pt-3">
                    <div class="form-group col-md-6">
                        <label class="mb-2">公益單位名稱</label>
                        <input type="text" class="form-control" v-model="unit">
                    </div>

                    <div class="form-group col-md-6">
                        <label class="mb-2">類別</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" v-model="cate">
                            <option value="1">家電機器</option>
                            <option value="2">生活用品</option>
                            <option value="3">服飾配件</option>
                            <option value="4">居家擺設</option>
                            <option value="5">毛小孩用品</option>
                            <option value="6">文具用品</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="mb-2">品名</label>
                        <input type="text" class="form-control" v-model="name">
                    </div>
                    <div class="form-group col-md-6">
                       <label class="mb-2">需求數量</label>
                        <input type="number" class="form-control" min="1" max="200" v-model="number">
                    </div>
                </div>
                <div class="form-group px-3">
                    <label class="mb-2">需求狀態</label>
                    <input type="text" class="form-control" v-model="state">
                </div>
                <div class="form-group px-3">
                    <label class="mb-2">需求目的</label>
                    <textarea class="form-control" cols="30" rows="5" v-model="purpose"></textarea>
                </div>
                <div class="form-group px-3">
                    <label class="mb-2">備註</label>
                    <textarea class="form-control" cols="30" rows="5" v-model="note"></textarea>
                </div>
               
                <button class="btn btn-danger mx-auto mb-3" style="display: block" @click="enter">確認送出</button>
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
                unit:'',
                cate:'',
                purpose:'',
                name:'',
                number:'',
                state:'',
                note:''
            }
        },
        methods:{
            enter(){
                const fdb = db.firestore()
                let num = parseInt(this.number, 10)
                fdb.collection('Supplies').doc().set({
                    name: this.name,
                    cate: this.cate,
                    purpose: this.purpose,
                    unit: this.unit,
                    number: num,
                    state: this.state,
                    note: this.note
                }).then(()=>{
                    this.$router.replace({name: "Donate"})
                })
            }
        },

    }
</script>

<style>

</style>