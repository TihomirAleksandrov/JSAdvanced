function solve(funcObj, ordersArr){
    const result = [];

    for (let order of ordersArr) {
        const curr = Object.assign({}, order.template);
        for (const part of order.parts) {
            curr[part] = funcObj[part];
        }
        result.push(curr);
    }

    return result;
}



