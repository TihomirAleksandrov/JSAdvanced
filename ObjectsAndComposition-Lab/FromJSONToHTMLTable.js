function solve(input){
    let infoArr = JSON.parse(input);
    let output = '<table>\n';
    let keysArr = Object.keys(infoArr[0]);
    let valuesArr = infoArr.map(obj => Object.values(obj));

    appendHeaders(keysArr);
    appendValues(valuesArr);

    output += '</table>';

    console.log(output);
    
    
    function appendHeaders(keysArr){
        output += '   <tr>';
        for (let key of keysArr) {
            output += `<th>${escape(key)}</th>`;
        }
        output += '</tr>\n';
    }

    function appendValues(valuesArr){
        for (let values of valuesArr) {
            output += '   <tr>';
            for(let value of values){
                output += `<td>${escape(value)}</td>`
            }
            output += '</tr>\n';
        }
    }

    function escape(value){
        return value
        .toString()
        .replace(/</g, '&lt')
        .replace(/>/g, '&gt')
        .replace(/"/g, '&quot')
        .replace(/'/g, '&#39')
        .replace(/&/g, '&amp');
    }
}

solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
);