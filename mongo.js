const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const uri = "mongodb://192.168.11.190";

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    // 选择数据库与集合
    const collection = client.db("1906test").collection("users");
    
    // 获取全部数据
    // collection.find({}).toArray(function(err,docs){
    //     console.log(docs);
    // });

    // where条件查询
    collection.find({'name':'李四'}).toArray(function(err,docs){
        console.log(docs);
    });

    // 添加
    const insert = {name:"bb",sex:"女",email:"bb@qq.com"};
    collection.insertOne(insert,function(err,result){
        console.log("insertOne\n");
        console.log(err);
        console.log(result);
    });

    // // 更新
    collection.updateOne({ name : 'aa' }
        , { $set: { name : 'smile' } }, function(err, result) {
        console.log("updateOne\n");
        console.log(err)
        console.log(result);
      });

    // 删除
    collection.deleteOne({ username : 'lucky' }, function(err, result) {
        console.log(err, null);
        console.log(1, result.result.n);
        console.log("Removed the document with the field a equal to 3");
        console.log(result);
      });

    client.close();
});