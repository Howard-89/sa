<template>
    <div id="donation">
        <div class="main py-5" style="background-color: rgb(246, 233, 205);">
            <div class="border border-dark shadow  mb-5 bg-white rounded mx-auto" style=" width: 65%;">
                
                <div class="form-row mx-0 mb-3"
                    style="background-color:rgb(48, 172, 85); width: 100%; height: 50px ;color:rgb(255, 255, 255);">
                    <div class="mt-3 mx-auto">確認捐贈</div>
                </div>
                <div class="form-group px-3">
                    <label for="inputInformation" class="mb-2">個人資訊</label>
                    <div class="name mt-3" style="font-size:30px">Collin</div> 
                </div>
                <div class="form-group px-3">
                    <label for="inputThing" class="mb-2">物資名稱</label>
                    <input type="text" class="form-control mx-auto" style="width:700px">
                </div>

                <div class="form-group px-3">
                    <label for="inputAmount" class="mb-2">捐贈數量</label>
                    <input type="text" class="form-control mx-auto" style="width:700px">
                </div>

                <div class="form-group px-3">
                    <label for="inputAddress1" class="mb-2">單位地址</label>
                    <input type="text" class="form-control mx-auto" style="width:700px" >
                </div>

                <div class="form-group px-3">
                    <label for="inputName" class="mb-2">單位名稱</label>
                    <input type="text" class="form-control mx-auto" style="width:700px" >
                </div>

                <div class="form-group px-3">
                    <label for="inputTel" class="mb-2">電話</label>
                    <input type="text" class="form-control mx-auto" style="width:700px" >
                </div>
                
                <div class="form-group px-3">
                    <label for="inputInformation1" class="mb-2">資訊</label>
                    <input type="text" class="form-control mx-auto" style="width:700px" >
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
    export default {

    }
</script>

<style>

</style>