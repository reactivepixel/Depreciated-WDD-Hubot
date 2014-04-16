var request = require('request'),
	cheerio = require('cheerio'),
	Entities = require('html-entities').XmlEntities,
	tarURL = "http://orlando.craigslist.org/search/sss?sort=date&catAbb=sss&hasPic=1&query=puppies"

request(tarURL, function(error, response, body) {

	var entities = new Entities();
	var $ = cheerio.load(body);
	// title
	// price
	// picture
	var items = [];
	$('.row').each(function(i, item) {
		var itemData = {};
		for (key in item.children) {
			var node = item.children[key];
			if (node !== undefined) {

				// if A tag top level
				if (node.name === 'a') {
					itemData.link = node.attribs.href;
					itemData.src = 'http://images.craigslist.org/' + node.data.id.substring(2) + '_300x300.jpg';
					if (node.children[0] !== undefined) {
						itemData.price = entities.decode(node.children[0].children[0].data)
					}
					items.push(itemData);
				}

				//
				if (node.name === 'span') {
					if (node.children[0] !== undefined) {
						title = node.children[2].next.children[0].data;
						if (title !== ' ' && title !== '  ') {
							itemData.title = node.children[2].next.children[0].data;
						}
					}
				}
			}
		}
	});
	console.log(items);

})
