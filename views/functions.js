/**
 * The router function for Put and Delete requests wrapped in a class
 */
class CallRouter {
    callRouter(method, path, data) {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.open(method, path, false);

        if (method == 'PUT') {
            xmlHttp.setRequestHeader("Content-type", "application/json");
        };

        if (!data) {
            xmlHttp.send(null);
        }
        else {
            xmlHttp.send(data);
        }
        return xmlHttp.responseText;
        console.log(xmlHttp.responseText);
    }
}

function callPutRequest() {
    var theRouter = new CallRouter;
    /**
     *  The example data is not truly needed, but a future assignment might need something here to pass through
     */
    exampleData = JSON.stringify({ 'example': 'data' });
    response = theRouter.callRouter('PUT', '/index', exampleData);
}

function callDeleteRequest() {
    var theRouter = new CallRouter;
    response = theRouter.callRouter('DELETE', '/index');
}