$('.sale-btn').click(function(){
    $.ajax({
        url:'../../cart/interface/addwq.php',
        data:{
            id:1000,
            name:'电饭煲',
            img:'../images/dfb.jpg',
            price:'299',
        },
        dataType:'json',
        success:function(data){
            console.log(data)
            window.location.href='./cart.html'
        }
    })
})