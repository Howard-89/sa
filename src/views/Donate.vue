<template>
  <div id="donate">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <h1 class="my-4">請選擇分類</h1>
          <div class="list-group">
            <a class="list-group-item" @click="handleCate" aria-label="1">家電機器</a>
            <a class="list-group-item" @click="handleCate" aria-label="2">生活用品</a>
            <a class="list-group-item" @click="handleCate" aria-label="3">服飾配件</a>
            <a class="list-group-item" @click="handleCate" aria-label="4">居家擺設</a>
            <a class="list-group-item" @click="handleCate" aria-label="5">毛小孩用品</a>
            <a class="list-group-item" @click="handleCate" aria-label="6">文具用品</a>
          </div>
        </div>

        <div class="col-lg-9">
          <div class="row my-4">
            <div class="col-lg-4 col-md-6 mb-4" v-for="(product, idx) in products" :key="idx">
              <div class="card h-100">
                <div class="card-body">
                  <h4 class="card-title" >
                    <button
                      type="submit"
                      class="btn btn-warning mt-4 mb-4 ml-5  mx-auto"
                      style="display: block ; width:150px;"
                      @click="change(product.name)"
                    >{{product.name}}</button>
                  </h4>
                  <h5>
                    需求數量：
                    <span style="color: crimson; font-size: 20px;">{{product.number}}</span>
                  </h5>
                  <h4 class="mt-3" style="color: coral;">需求原因 :</h4>
                  <p class="card-text mt-3" style="line-height: 25px;">{{product.purpose}}</p>
                  <h4 class="mt-3" style="color: coral;">需求單位 :</h4>
                  <p class="mt-3">{{product.unit}}</p>
                </div>
              </div>
            </div>
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
import { db } from "../db";
const fstore = db.firestore();
export default {
  data() {
    return {
      products: [],
      supplies: [],
      cate: "",
      cateList: {
        "1": { name: "家電機器" },
        "2": { name: "生活用品" },
        "3": { name: "服飾配件" },
        "4": { name: "居家擺設" },
        "5": { name: "毛小孩用品" },
        "6": { name: "文具用品" }
      }
    };
  },
  firestore() {
    let products = fstore.collection("Supplies").where("cate", "==", this.cate);
    let supplies = fstore.collection("Supplies");
    return {
        products,
        supplies
    };
  },
  methods: {
    change(name) {
      this.$router.push(`/products/${name}`);
    },
    handleCate(e) {
      console.log("e:", e.target.ariaLabel);
      this.cate = e.target.ariaLabel;
    },
    getProducts(val) {
      const newCate = `${val}`;
      console.log("get", newCate);
      let products = [];
      fstore
        .collection("Supplies")
        .where("cate", "==", this.cate)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              console.log(doc.data())
              const data = doc.data();
            // doc.data() is never undefined for query doc snapshots
            products.push(data);
          });
        });

      this.products = products;
    }
  },
  watch: {
    cate: function(val) {
      this.getProducts(val);
    }
  }
};
</script>