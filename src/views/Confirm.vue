<template>
    <div id="donation">
        <div class="main py-5" style="background-color: rgb(246, 233, 205);">
            <div class="border border-dark shadow  mb-5 bg-white rounded mx-auto" style=" width: 65%;" >
                
                <div class="form-row mx-0 mb-3"
                    style="background-color:rgb(48, 172, 85); width: 100%; height: 50px ;color:rgb(255, 255, 255);">
                    <div class="mt-3 mx-auto">確認捐贈</div>
                    
                </div>
                <div class="form-group px-3">
                    <label for="inputInformation" class="mb-2">個人資訊確認</label>
                </div>
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
                 
             
            </div>
            <div class="form-group px-3">
                    <label for="inputInformation" class="mb-2">個人資訊確認</label>
                </div>
                 <div class="row" style="text-align:left;line-height:70px;" v-for="(product, idx) in products" :key="idx" >
                <div class="col-3 mt-5" ></div>
                <div class="col-3"> <div class="name"><img src="" style="width:18px; height: 18px ;" class="mr-2">物資名稱</div> </div>
                <div class="col-6">{{product.name}}</div>
                <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="email"><img src="" style="width:18px; height: 18px ;" class="mr-2"><span >類別</span></div> </div>
                <div class="col-6">{{product.cate}}</div>
                <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="address"><img src="" style="width:18px; height: 18px ;" class="mr-2"><span >狀態</span></div> </div>
                <div class="col-6">{{product.state}}</div>
                 <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="phone"><img src="" style="width:18px; height: 18px ;" class="mr-2"><span >需求目的</span></div> </div>
                <div class="col-6">{{product.purpose}}</div>
                <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="phone"><img src="" style="width:18px; height: 18px ;" class="mr-2"><span >備註</span></div> </div>
                <div class="col-6">{{product.note}}</div>
                 
                 <div class="col-3" style="margin-bottom:10px;"></div>
                <div class="col-3"> <div class="phone"><img src="" style="width:18px; height: 18px ;" class="mr-2"><span >合作單位</span></div> </div>
                <div class="col-6">{{product.unit}}</div>
                 
                 
             
            </div>


                

                <div class="form-group px-3">
                    <label for="inputAmount" class="mb-2">捐贈數量</label>
                    <input type="text" class="form-control mx-auto" style="width:700px">
                </div>
                

                

                

                
                
                

                <div class="form-group px-3">
                        <label for="inputPassword4" class="mb-2">捐贈方式</label>
                        <select class="custom-select d-block mx-auto" style="width:700px" >
                            <option selected>選擇...</option>
                            <option value="1">四大超商郵寄</option>
                            <option value="2">自行送達</option>
                            <option value="3">宅配</option>
                            <option value="4">聯絡公益單位取貨</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-danger mx-auto mb-3" style="display: block">確認送出</button>

              
                
               



            
            

            </div>
        </div>
    </div>
</template>

<script>
    import { db } from '../db'
    const fstore = db.firestore()
    export default {
        data() {
            let id = this.$route.params.id;
            let currentUser = db.auth().currentUser;
            let uid = ( currentUser !== undefined) ? currentUser.uid : '';
            return {   
                products: [],
                id,
                users:[],
                uid
            }
                     
        },
        firestore() {
            let products = fstore.collection('Supplies').where("name", "==", this.id);
            let users = fstore.collection('Customer').where("uid", "==", this.uid);
        
            return {
                products,
                users 
            }
        }

    }
    
</script>

<style>

</style>