const languageDetectionApi ='{"data":{"detections":[{"language":"ja","isReliable":true,"confidence":39.04}]}}';
console.log(languageDetectionApi); 

const parsedJavascriptObject = JSON.parse(languageDetectionApi);
console.log(parsedJavascriptObject.data); 

// languageDetectionApi key 'data' and value an object, objects key named 'detections' and value is an array of objects