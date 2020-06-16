<template>
    <div id="donation">
        <div class="main py-5" style="background-color: rgb(246, 233, 205);">
            <div class="border border-dark shadow  mb-5 bg-white rounded mx-auto" style=" width: 65%;">
                <div class="form-row mx-0 mb-4"
                    style="background-color:rgb(48, 172, 85); width: 100%; height: 50px ;color:rgb(255, 255, 255);">
                    <div class="mt-3 mx-auto">捐款資訊</div>
                </div>


                <div class="form-row px-3 pt-3">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4" class="mb-2">捐款類型</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>選擇...</option>
                            <option value="1">單次捐款</option>
                            <option value="2">定期捐款</option>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="inputPassword4" class="mb-2">捐款方式</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>選擇...</option>
                            <option value="1">ATM轉帳</option>
                            <option value="2">信用卡捐款</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4" class="mb-2">是否第一次捐款</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>選擇...</option>
                            <option value="1">是</option>
                            <option value="2">否</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4" class="mb-2">是否訂閱電子報</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>選擇...</option>
                            <option value="1">是</option>
                            <option value="2">否</option>
                        </select>
                    </div>
                </div>
                <div class="form-row mx-0 my-4"
                    style="background-color:rgb(48, 172, 85); width: 100%; height: 50px ;color:rgb(255, 255, 255);">
                    <div class="mt-3 mx-auto">持卡人資料</div>
                </div>
                <div class="form-group px-3">
                    <label for="inputAddress2" class="mb-2">持卡人姓名</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="">
                </div>
                <div class="form-group px-3">
                    <label for="inputAddress" class="mb-2">信箱</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="">
                </div>

                <div class="form-group px-3">
                    <label for="inputAddress" class="mb-2">聯絡資訊</label>
                    <input type="text" class="form-control" id="inputAddress">
                </div>

                <div class="form-group px-3">
                    <label for="inputAddress" class="mb-2">聯絡地址</label>
                    <input type="text" class="form-control" id="inputAddress">
                </div>

                <div class="form-row mx-0 my-4"
                    style="background-color:rgb(48, 172, 85); width: 100%; height: 50px ;color:rgb(255, 255, 255);">
                    <div class="mt-3 mx-auto">收據開立資訊</div>
                </div>

                <div class="form-group px-3">
                    <label for="inputAddress2" class="mb-2 col-md-4"><span style="color: red;">*</span> 是否需要收據？</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio"
                            value="option1">
                        <label class="form-check-label" for="inlineRadio1">是</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">否</label>
                    </div>
                </div>
                <div class="ml-4 mb-4" style="color: rgb(173, 173, 173);">（以下欄位若不需收據則毋須填寫）</div>
                <div class="form-group px-3">
                    <label for="inputAddress2" class="mb-2 col-md-4"><span style="color: red;">*</span>
                        收據是否需要紙本列印？</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio"
                            value="option1">
                        <label class="form-check-label" for="inlineRadio1">是</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio"
                            value="option2">
                        <label class="form-check-label" for="inlineRadio2">否</label>
                    </div>
                </div>
                <div class="form-group px-3  ml-3">
                    <label for="inputAddress" class="mb-2">收據抬頭</label>
                    <input type="text" class="form-control" id="inputAddress">
                </div>

                <div class="form-group px-3  ml-3">
                    <label for="inputAddress" class="mb-2">身分證字號</label>
                    <input type="text" class="form-control" id="inputAddress">
                </div>

                <div class="form-group px-3  ml-3">
                    <label for="inputAddress" class="mb-2">備註</label>
                    <input type="text" class="form-control" id="inputAddress">
                </div>



                <div class="form-group" style="font-size: 13px;">
                    <div class="form-check text-center">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                            我已閱讀完畢並接受<span style="font-weight:bold;"> 服務條款</span> 及 <span style="font-weight:bold;">
                                隱私權政策</span>
                        </label>
                    </div>
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