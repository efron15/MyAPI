$(document).ready(function () {
    // 在畫面開始時執行這段程式
    init()
    
    function init() {
        // 抓取API網址
        let url = "https://api.covid19api.com/summary"
        // 設定一個空值後續存放數據用
        let data = ''

        $.get(url,function (data) {
            console.log(data.Global);
            data = `
            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.TotalDeaths}</td>
            <td>${data.Global.TotalRecovered}</td>
            <td>${data.Global.NewDeaths}</td>
            <td>${data.Global.NewConfirmed}</td>
            `

            $("#data").html(data)
        })
    }
})