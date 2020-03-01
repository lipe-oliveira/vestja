const mongoose = require('../../database/index');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true,
		select: false
	},
	seguindo: [
		{
			user: {
				type: String,
				required: false
			}
		}
	],
	salvos: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user_feeds'
		}
	],
	receitas: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'receitas'
		}
	],
	feed: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'feed'
		}
	],
	restaurantes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'restaurantes'
		},
		{
			rate: {
				type: String,
				required: false
			}
		}
	],
	createdAt: {
		type: Date,
		default: Date.now
	}
});

schema.pre('save', async function(next) {
	const hash = await bcrypt.hash(this.password, 10);
	this.password = hash;

	next();
});

const User = mongoose.model('User', schema);
module.exports = User;
