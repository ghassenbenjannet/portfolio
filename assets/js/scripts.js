function displayContent(xmlFile, xslFile) {
    const contentDiv = document.getElementById('content');

    const xhrXML = new XMLHttpRequest();
    xhrXML.open('GET', xmlFile, true);
    xhrXML.onreadystatechange = function () {
        if (xhrXML.readyState === 4 && xhrXML.status === 200) {
            const xml = xhrXML.responseXML;

            const xhrXSL = new XMLHttpRequest();
            xhrXSL.open('GET', xslFile, true);
            xhrXSL.onreadystatechange = function () {
                if (xhrXSL.readyState === 4 && xhrXSL.status === 200) {
                    const xsl = xhrXSL.responseXML;

                    if (window.ActiveXObject || 'ActiveXObject' in window) {
                        const ex = xml.transformNode(xsl);
                        contentDiv.innerHTML = ex;
                    } else if (document.implementation && document.implementation.createDocument) {
                        const xsltProcessor = new XSLTProcessor();
                        xsltProcessor.importStylesheet(xsl);
                        const resultDocument = xsltProcessor.transformToFragment(xml, document);
                        contentDiv.appendChild(resultDocument);
                    }
                }
            };
            xhrXSL.send();
        }
    };
    xhrXML.send();
}
