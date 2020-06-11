<template>
    <div id="donation">
        <div class="main py-5" style="background-color: rgb(246, 233, 205);">
            <div class="border border-dark shadow  mb-5 bg-white rounded mx-auto" style=" width: 65%;">

                <div class="form-row mx-0 mb-3"
                    style="background-color:rgb(48, 172, 85); width: 100%; height: 50px ;color:rgb(255, 255, 255);">
                    <div class="mt-3 mx-auto">捐贈資訊確認</div>

                </div>
                <div class="row" style="text-align:left;line-height:70px;" v-for="(user, idx) in users" :key="idx">
                    <div class="col-3 mt-5"></div>
                    <div class="col-3">
                        <div class="name"><img src="../assets/name.png" style="width:18px; height: 18px ;"
                                class="mr-2">姓名</div>
                    </div>
                    <div class="col-6">{{user.name}}</div>
                    <div class="col-3" style="margin-bottom:10px;"></div>
                    <div class="col-3">
                        <div class="email"><img src="../assets/email.png" style="width:18px; height: 18px ;"
                                class="mr-2"><span>信箱</span></div>
                    </div>
                    <div class="col-6">{{user.email}}</div>
                    <div class="col-3" style="margin-bottom:10px;"></div>
                    <div class="col-3">
                        <div class="address"><img src="../assets/address.png" style="width:18px; height: 18px ;"
                                class="mr-2"><span>地址</span></div>
                    </div>
                    <div class="col-6">{{user.address}}</div>
                    <div class="col-3" style="margin-bottom:10px;"></div>
                    <div class="col-3">
                        <div class="phone"><img src="../assets/phone.png" style="width:18px; height: 18px ;"
                                class="mr-2"><span>手機</span></div>
                    </div>
                    <div class="col-6">{{user.phone}}</div>
                    <div class="col-3" style="margin-bottom:10px;"></div>
                    <div class="col-3">
                        <div class="phone"><img src="../assets/phone.png" style="width:18px; height: 18px ;"
                                class="mr-2"><span>物資名稱</span></div>
                    </div>
                    <div class="col-6">{{name}}</div>
                    <div class="col-3" style="margin-bottom:10px;"></div>

                    <div class="col-3">
                        <div class="phone"><img src="../assets/phone.png" style="width:18px; height: 18px ;"
                                class="mr-2"><span>物資數量</span></div>
                    </div>
                    <div class="col-6">{{amount}}</div>
                    <div class="col-3" style="margin-bottom:10px;"></div>

                    <div class="col-3">
                        <div class="phone"><img src="../assets/phone.png" style="width:18px; height: 18px ;"
                                class="mr-2"><span>合作單位</span></div>
                    </div>
                    <div class="col-6">{{unit}}</div>
                    <div class="col-3" style="margin-bottom:10px;"></div>

                    <div class="col-3">
                        <div class="phone"><img src="../assets/phone.png" style="width:18px; height: 18px ;"
                                class="mr-2"><span>捐贈數量</span></div>
                    </div>
                    <div class="col-6"><input type="text" style="width:200px; height:30px;" v-model="gamount"></div>
                    <div class="col-3" style="margin-bottom:10px;"></div>

                    <div class="col-3">
                        <div class="phone"><img src="../assets/phone.png" style="width:18px; height: 18px ;"
                                class="mr-2"><span>捐贈方式</span></div>
                    </div>
                    <div class="col-6"><select style="width:200px; height:30px;" v-model="way">
                        <option value="四大超商郵寄">四大超商郵寄</option>
                        <option value="自行送達">自行送達</option>
                        <option value="宅配">宅配</option>
                        <option value="聯絡公益單位取貨">聯絡公益單位取貨</option>
                    </select></div>
                    <div class="col-3" style="margin-bottom:10px;"></div>
                    <button type="submit" class="btn btn-danger mx-auto mb-3" style="display: block"
                    @click="enter(user.name)">確認送出</button>
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
            let name = this.$route.params.name;
            let unit = this.$route.params.unit;
            let amount = this.$route.params.amount;
            let cate = this.$route.params.cate;
            let currentUser = db.auth().currentUser;
            let uid = (currentUser !== undefined) ? currentUser.uid : '';

            return {
                products: [],
                users: [],
                uid,
                name,
                unit,
                amount,
                cate,
                gamount:'',
                way:''
            }

        },
        firestore() {
            let products = fstore.collection('Supplies').where("name", "==", this.name);
            let users = fstore.collection('Customer').where('uid', '==', this.uid);

            return {
                products,
                users,
            }
        },
        methods: {
            enter(uname) {
                const HisRef = fstore.collection("History");
                let num = parseInt(this.gamount, 10)
                let userId = db.auth().currentUser.uid
                let name = this.name
                HisRef.doc().set({
                    name: uname,
                    uid: userId,
                    pname: this.name,
                    unit: this.unit,
                    gamount: num,
                    way: this.way,
                    date: new Date()
                })
                .then(()=>{
                    const ProductRef = fstore.collection('Supplies').doc().where('name', '==', name)
                    ProductRef
                        .get()
                        .then(function(querySnapshot){
                            querySnapshot.forEach(doc=>{
                                let lessLeft = doc.data().number - num;
                                ProductRef.doc().update({
                                    number: lessLeft
                                })
                                .then(()=>{
                                    alert("您已成功捐贈!!")
                                    this.$router.push(`/donate`)
                                })
                            })
                        })
                })

            }
        }

    }
</script>

<style>

</style>