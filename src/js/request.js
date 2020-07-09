     var btn =document.querySelector('.btn')
     var user = document.getElementById('text')
     var word = document.getElementById('password_1')
     //console.log(btn)
     //绑定事件
     btn.onclick = function(){
         console.log(11111)
        var username = user.value
        var password = word.value
        //创建ajax对象k
        var xhr = new XMLHttpRequest();
        //初始化
        xhr.open('post','../day23.php')
        //设置请求头
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        //发送请求主体
        xhr.send("username="+username+"&password="+password)
        //等待响应完成
        xhr.onload =function(){
            if(xhr.readyState==4&&xhr.status==200){
                console.log(xhr.responseText)
                if(xhr.responseText == 1){
                    window.location.href="./index.html" 
                }else{
                    alert('账号或密码不正确！')
                }
            } 
        }
    }

