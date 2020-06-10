let mongoose = require('../../database/index');

const schema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	latlng: {
		type: String,
		required: true
	},
	descript: {
		type: String,
		required: true
	},
	id: {
		type: String,
		required: true
	},
	ratings: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: true
			},
			rate: {
				type: String
			},
			description: {
				type: String
			}
		}
	]
});

const rest = mongoose.model('restaurantes', schema);
module.exports = rest;
