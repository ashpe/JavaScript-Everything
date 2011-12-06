
/*
 * GET home page.
 */

exports.index = function(req, res){
  var get_blogs = [
    { heading: "Article #1", content: "Article contents here", posted_by: "jimbob" },
    { heading: "Fish noms", content: "I like to eat fish </not>", posted_by: "fish lover" },
    { heading: "JavaScript blog", content: "Javascript hoooooeee!", posted_by: "coffeemang" },
    { heading: "JavaScript blog", content: "Javascript hoooooeee!", posted_by: "coffeemang" },
    { heading: "JavaScript blog", content: "Javascript hoooooeee!", posted_by: "coffeemang" },
    { heading: "JavaScript blog", content: "Javascript hoooooeee!", posted_by: "coffeemang" },
    { heading: "JavaScript blog", content: "Javascript hoooooeee!", posted_by: "coffeemang" },
    { heading: "JavaScript blog", content: "Javascript hoooooeee!", posted_by: "coffeemang" },
  ];
  res.render('index', { title: 'tiwik: things I wish I knew', blogs: get_blogs })
};
