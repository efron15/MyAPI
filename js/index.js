$(document).ready(function () {
    init()
    
    function init() {
        let url = "https://api.covid19api.com/summary"
        let data = ''

        $.get(url,function (data) {
            console.log(data.Global);
            data = `
            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.TotalDeaths}</td>
            <td>${data.Global.TotalRecovered}</td>
            <td>${data.Global.NewDeaths}</td>
            `

            $("#data").html(data)
        })
    }
})