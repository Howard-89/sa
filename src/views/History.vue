<template>
    <div style="height:500px">
        <div class="main py-5" style="background-color: rgb(246, 233, 205);">
            <div class="border border-dark shadow  mb-5 bg-white rounded mx-auto" style=" width: 65%;">
                <div class="form-row mx-0 mb-4"
                    style="background-color:rgb(48, 172, 85); width: 100%; height: 50px ;color:rgb(255, 255, 255);">
                    <div class="mt-3 mx-auto">歷史紀錄</div>
                </div>
                <img src="../assets/history1.png" class="card-img-top" style="width:150px; height: 150px ;">
                <hr>
                <div class="row" style="text-align:left;line-height:70px;">
                    <div class="col-3 mt-5"></div>
                    <div class="col-3">
                        <div class="name"><img src="../assets/donate.png" style="width:18px; height: 18px ;"
                                class="mr-2">捐贈紀錄</div>
                    </div>
                    <div class="col-6 mb-5">
                        <table v-for="(history, idx) in historys" :key="idx">
                            <tr>
                                <td> {{history.name}}於{{history.date}}捐贈{{history.pname}}*{{history.gamount}}給{{history.unit}}
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-3 mt-5"></div>
                    <div class="col-3">
                        <div class="name"><img src="../assets/money.png" style="width:18px; height: 18px ;"
                                class="mr-2">捐款紀錄</div>
                    </div>
                    <div class="col-6 mb-5">
                        <table v-for="(donate, idx) in donates" :key="idx">
                            <tr>
                                <td> {{donate.Name}}於{{donate.Time}}捐贈{{donate.Money}}元給{{donate.DonName}}
                                </td>
                            </tr>
                        </table>
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
    import moment from 'moment'
    const fstore = db.firestore()
    export default {
        data() {
            let uid = db.auth().currentUser.uid;

            return {
                historys: [],
                donates: [],
                uid,
            }
        },
        filters:{
            formatedDate(val){
                return moment(val).format('MM/DD/YYYY,HH:mm')
            }
        },
        firestore() {
            let historys = fstore.collection('History').where('uid', '==', this.uid)
            let donates = fstore.collection('donate').where('Uid','==',this.uid)
            return {
                historys,
                donates,
            }
        }

    }
</script>

<style>

</style>