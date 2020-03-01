mongoose = require('mongoose');

const schema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	latlng: {
		type: Point,
		coordinates: []
	},
	rating: [
		{
			user: {
				type: mongoose.Types.Schema.ObjectId,
				ref: 'User'
			},
			rate: {
				type: String
			}
		}
	]
});

const rest = mongoose.model('restaurantes', schema);
module.exports = rest;
