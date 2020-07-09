var userReg = /^\d{6,11}$/

$('input').on('input',function(){
    var flag = false
    console.log($(this).val())
    switch($(this).attr('id')){
        case 'username':
            flag = userReg.test($(this).val())
            console.log(flag)
            break
        case 'password':
            flag = userReg.test($(this).val())
            break  
    }
    if(flag){
        $(this).next().attr('class','active')
        console.log($(this).next().attr('class'))
    }else{
        $(this).next().removeAttr('class')
    }
})
$('.btn').click(function(){
    console.log($('#username').val())
    $.ajax({
        url:'../login.php',
        type:'post',
        // dataType:'josn',
        data:{
            username:$('#username').val(),
            password:$('#password').val()
        },
        success:function(data){
            var a = JSON.parse(data)
            console.log(a.code)
            if(a.code==1){
                alert ('账号注册成功，点击确认跳转登录界面')
                window.location.href='./detail.html'
            }else{
                alert('注册失败,用户名已被占用;请重新注册')
            }
        }
    })
})