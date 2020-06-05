<template>
  <div class="home">
      <div class="banner mb-3 clearfix">
        <img src="../assets/banner1.png" class="img-fluid">
        <!-- <div class="ban-text">舊物傳情</div>
        <div class="ban-text2">本平台期望透過便利的金物流及捐贈單管理</div>
        <div class="ban-text3">使閒置資源再次流動，正確地將物資分享給需要的人</div> -->
      </div>
      <div class="main mb-5">
        <div class="card-deck clearfix" style="margin-left: 20px;margin-right: 20px;">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <img src="../assets/img1.jpg" class="card-img-top" style="height:350px ; width:100%;">
              <div class="card-body ">
                <p class="card-text mb-4" style="line-height: 40px;">以往你捐贈的舊物，不一定符合別人的需求，有時會造成物資的浪費，但在這邊你可以看到各個公益單位所需要的物資，並且你可以按照各單位的需求，捐贈他們適合的物資，讓愛心可以被最大化</p>
                <router-link class="btn btn-danger btn-lg btn-block" to="/donate">我要捐贈</router-link>
              </div>
            </div>
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <img src="../assets/img2.jpg" class="card-img-top" style="height:350px ; width:100%;">
              <div class="card-body">
                <p class="card-text mb-4" style="line-height: 40px;" >如果您的公益單位需要任何物資，歡迎跟我們聯絡，我們會盡最大的努力，幫您募集到您需要的物資，這是本平台最大的宗旨與期望，希望所有舊物都能被妥善利用，讓愛心傳遞下去</p>
                <router-link class="btn btn-danger btn-lg btn-block" to="/public">公益合作</router-link>
              </div>
            </div>
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <img src="../assets/img3.jpg" style="height:350px ; width:100%;" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text mb-4" style="line-height: 40px;">
                   因為我們不一定所有的物資募集都能夠成功完成任務，這時候就需要您大大的愛心，無論是直接捐贈金錢，或是直接捐贈新物，我們都歡迎您，讓需要幫助的公益單位都能得到幫助
                </p>
                <router-link class="btn btn-danger btn-lg btn-block" to="/donation">我要捐款</router-link>
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
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>