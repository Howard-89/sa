<template>
    <div id="donate">
        <div class="container">
            <div class="row">

                <div class="col-lg-3">

                    <h1 class="my-4">捐贈物資分類</h1>
                    <div class="list-group">
                        <a href="#" class="list-group-item">家電機器</a>
                        <a href="#" class="list-group-item">生活用品</a>
                        <a href="#" class="list-group-item">服飾配件</a>
                        <a href="#" class="list-group-item">居家擺設</a>
                        <a href="#" class="list-group-item">毛小孩用品</a>
                        <a href="#" class="list-group-item">文具用品</a>
                    </div>

                </div>
                <!-- /.col-lg-3 -->

                <div class="col-lg-9">

                    <div class="row my-4">

                        <div class="col-lg-4 col-md-6 mb-4" v-for="(product, idx) in products" :key="idx">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h4 class="card-title">
                                        <a href="fan.html">{{product.name}}</a>
                                    </h4>
                                    <h5>需求數量：<span style="color: crimson; font-size: 20px;">{{product.number}}</span></h5>
                                    <h4 class="mt-3" style="color: coral;">需求原因 :</h4>
                                    <p class="card-text mt-3" style="line-height: 25px;">{{product.purpose}}</p>
                                    <h4 class="mt-3" style="color: coral;">需求單位 :</h4>
                                    <p class="mt-3">{{product.unit}}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- /.row -->

                </div>
                <!-- /.col-lg-9 -->

            </div>
            <!-- /.row -->

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
    const fstore = db.firestore()
    export default {
        data(){
            return{
                products:[]
            }
        },
        firestore(){
            let products = fstore.collection('Supplies')
            return{
                products
            }
        }
    }
</script>