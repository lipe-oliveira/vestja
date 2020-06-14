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
	fotos: [
		{
			type: String
		}
	],
	ratings: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: false
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
