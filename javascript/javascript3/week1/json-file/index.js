const jsonExample =
  '{"title": "Game of thrones", "seriesDurationsDays": 3, "seriesDurationsHours": 1, "seasons":	8, "episodes":	73, "basedOn": "A Song of Ice and Fire", "author": "George R. R. Martin", "release": "2011 –2019"}';
console.log(jsonExample);

const parsedJavascriptObject = JSON.parse(jsonExample);
console.log(parsedJavascriptObject);

