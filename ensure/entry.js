var util_sync = require('./util.js')

alert(util_sync.data)

document.getElementById("aBtn").onclick = function() {
    require.ensure([], function() {
        var awork = require('./Abtn-work.js')
        alert(awork.data)
        //异步里面再导入同步模块--实际是使用同步中的模块
        var util1 = require('./util.js')
    })
}

document.getElementById("bBtn").onclick = function() {

    require.ensure([], function() {
        var bwork = require('./Bbtn-work.js')
        alert(bwork.data)
    })
}