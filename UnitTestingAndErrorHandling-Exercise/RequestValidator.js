function validate(obj){
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = new RegExp(/^(?:\*|[A-Za-z\.\d]+)$/gm);
    let messagePattern = /^[^\<\>\\\&\'\"]*$/gm;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (obj['method'] === undefined || !validMethods.includes(obj['method'])) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (obj['uri'] === undefined || !uriPattern.test(obj['uri'])) {
        throw new Error('Invalid request header: Invalid URI');
    } else if (obj['version'] === undefined || !validVersions.includes(obj['version'])) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (obj['message'] === undefined || !messagePattern.test(obj['message'])) {
        throw new Error('Invalid request header: Invalid Message')
    } else{
        return obj;
    }
}