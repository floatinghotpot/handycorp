module.exports = function(app) {
  app.dataSources.mongoDs.automigrate('Chat', function(err) {
    if (err) throw err;
      
    var sample_data = [{
        id: 1,
        name: 'Jack Ma',
        lastText: 'Hey, it\'s me',
        face: 'http://s.cn.bing.net/th?id=OJ.k05StdTJXQx6kw&w=75&h=75&pid=MSNJVFeeds'
    }, {
        id: 2,
        name: 'Pony Ma',
        lastText: 'Did you get the ice cream?',
        face: 'http://s.cn.bing.net/th?id=OJ.wwQXhCc963PaQw&w=75&h=75&pid=MSNJVFeeds'
    }, {
        id: 3,
        name: 'Lei Jun',
        lastText: 'I should buy a boat',
        face: 'http://s.cn.bing.net/th?id=OJ.ke32pfHJFOGnyQ&w=75&h=75&pid=MSNJVFeeds'
    }, {
        id: 4,
        name: 'Bill Gates',
        lastText: 'Look at my mukluks!',
        face: 'http://s.cn.bing.net/th?id=OJ.3T8PaSqpO4Ivjg&w=75&h=75&pid=MSNJVFeeds'
    },{
        id: 5,
        name: 'Tim Cook',
        lastText: 'You on your way?',
        face: 'http://s.cn.bing.net/th?id=OSA.QhBOhNS3QsOM4A&w=75&h=75&c=8&rs=1&pid=SatAns'
    }];
    app.models.Chat.create(sample_data, function(err, chats) {
      if (err) throw err;
      console.log('Models created: \n', chats);
    });
}); 
};