<template>
    <div id="products">
        <div class="main py-5" style="background-color: rgb(246, 233, 205);">
            <div class="card" style="width: 800px;margin:0 auto;">
                <div class="card-header" style="background-color: orange">
                    詳細內容
                </div>
                <div class="card-body" align="center" style="line-height:50px">
                    <table v-for="(product, idx) in products" :key="idx">
                        <tr>
                            <td>需求單位 : </td>
                            <td>{{product.unit}}</td>
                        </tr>
                        <tr>
                            <td>類別 : </td>
                            <td>{{product.cate}}</td>
                        </tr>
                        <tr>
                            <td>品名 : </td>
                            <td>{{product.name}}</td>
                        </tr>
                        <tr>
                            <td>需求數量 : </td>
                            <td>{{product.number}}</td>
                        </tr>
                        <tr>
                            <td>狀態 : </td>
                            <td>{{product.state}}</td>
                        </tr>
                        <tr>
                            <td>需求目的 : </td>
                            <td>{{product.purpose}}</td>
                        </tr>
                        <tr>
                            <td>備註 : </td>
                            <td>{{product.note}}</td>
                        </tr>
                        <tr>
                           <button type="submit" class="btn btn-warning mt-4 mb-4 ml-5" style="display: block" @click="change(product.unit ,product.name, product.number, product.cate)">確認捐贈</button>
                           
                        </tr>

                    </table>
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
    import {
        db
    } from '../db'
    const fstore = db.firestore()
    export default {
        
        data() {
            let id = this.$route.params.id
            return {
                products: [],
                id,
                 }
        },
        firestore() {
            let products = fstore.collection('Supplies').where("name", "==", this.id)
            return {
                products
            }
        },
        methods:{
            change(unit, name, amount, cate){
                
                this.$router.push(`/confirm/${unit}/${name}/${amount}/${cate}`)
                
            }
        }

    }
</script>

<style lang="css" scoped>

</style>