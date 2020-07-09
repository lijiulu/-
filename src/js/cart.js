

$.ajax({
    url:'../../cart/interface/showlist.php',
    dataType:'json',
    success:function(res){
        var str = ''
        var total = res.data[0].product_num *res.data[0].product_price
        var nums=res.data[0].product_num
        str += ` <div class="item-box">
                    <div class="item-table">
                        <div class="goods-img" >
                            <img src="${res.data[0].product_img}" alt="" style='width:000%;'>
                        </div>
                        <div class="goods-name">
                            <h3>${res.data[0].product_name}</h3>
                        </div>
                        <div class="goods-price">
                            ${res.data[0].product_price}元
                        </div>
                        <div class="goods-num">
                            <div class="change-goods-num">
                                <p>-</p>
                                <span>${res.data[0].product_num}</span>
                                <p>+</p>
                            </div>
                        </div>
                        <div class="goods-total">
                            ${total}元
                        </div>
                        <div class="goods-action">
                            <span>X</span>
                        </div>
                    </div>
                </div>`  
            $('.list-item').html(str)
            $('.total-price em').text(total)     
            $('.cart-total i').text(nums)

       var change = $('.change-goods-num span').first().text()
       var price=$('.item-box .goods-price').text()
              
    //减少功能
       $('.change-goods-num p').eq(0).click(function(){
            if(change<=1){
            alert('商品数目不能小于0件')
            }else{
                change--
                $('.change-goods-num span').first().text(change) 
                $('.cart-total i').text(change)
                total=parseInt(change)*parseInt(price)
                $('.item-box .goods-total').text(total+'元')
                $('.total-price em').text(total)
                $.get('../../cart/interface/updatewq.php',{
                    type:"cut",
                    id:1000
                },
                function(data){
                    var json = JSON.parse(data);
                    if(json.code==1){
                        $('.change-goods-num span').first().text(change)
                    }
                })
            
            }
            //如果商品数量剪完以后小于等于0,说明想删除商品,调用删除接口:./interface/delwq.php?id=00000                  
        })
        //增加功能
        $('.change-goods-num p').eq(1).click(function(){
            change++
            $('.change-goods-num span').first().text(change)
            $('cart-total i').text(change)
            total=parseInt(change)*parseInt(price)
            $('.item-box .goods-total').first().text(total+'元')
            $('.total-price em').text(total)
            $.get('../../cart/interface/updatewq.php',{
                id:1000,
                type:'add'
            },function(data){
                var json = JSON.parse(data);
                    if(json.code==1){
                        $('.change-goods-num span').first().text(change)
                    }
            })
        })
        //删除功能
        $('.item-box .goods-action span').click(function(){
            $('.list-item').html('')
            $.ajax({
                url:'../../cart/interface/delwq.php',
                data:{
                    id:1000
                }
            })
        })
    }
})



