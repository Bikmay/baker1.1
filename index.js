var express = require('express');
var app = express();


app.use(express.static('public')); // public - это директория где у тебя файлики все лежат которые надо статично отдавать
// если поставишь / он должен будет отдавать текущую дерикторию и все файлики рядом где он лежит

app.listen(3000, function () { ///3000 - это порт, можешь менять на какой надо
  console.log('Example app listening on port 3000!');
});
