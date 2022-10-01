function generateReport() {
    let rows = document.querySelectorAll('tbody tr');
    let headers = document.querySelectorAll('thead tr th');
    let result = [];

    for (let i = 0; i < rows.length; i++) {
        let tableData = rows[i].cells;
        let data = {};

        for (let j = 0; j < tableData.length; j++) {
            let headerInfo = headers[j].childNodes;
            if (headerInfo[1].checked) {
                data[headerInfo[0].textContent.trim().toLocaleLowerCase()] = tableData[j].textContent;
            }
        }

        result.push(data);
    }

    let jsonResult = JSON.stringify(result);
    document.getElementById('output').textContent = jsonResult;
}