$(document).ready(function () {
    init()
    
    function init() {
        let url = "https://api.covid19api.com/summary"
        let data = ''

        $.get(url,function (data) {
            console.log(data.Global);
            data = ``
        })
    }
})