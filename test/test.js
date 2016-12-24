
mobs = new Array()
for (var index = 10; index < 100; index++) {
    var mobile = '186201121'+index
    mobs.push(mobile)
}

var index = 0
window.setInterval(function(){
    mobile = mobs[index++]
    $.ajax('/share/get_free_service',{
                    'type':'post',
                    'dataType':'json',
                    'data':{
                        'u':'1206',
                        'sign':'195ed00a492daaf000a1794e73613337',
                        'mobile':mobile
                    },
                    'success':function(result){
                        if(result && result.code==1){
                            console.log('领取成功'+mobile)
                        }else if(result && result.code==0){
                            console.log(result.message);
                        }else{
                          console.log(result);
                        }
                    },
                    'error':function(error){
                        console.log(error)
                    }
    })
}, 1000)