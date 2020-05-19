const mongoose = require('../../database/index');
const bcrypt = require('bcryptjs');

const schema_project = new mongoose.Schema({
	categoria: {
		type: String,
		require: false
	},

	texto: {
		type: String,
		required: true
	},

	rates: [
		{
			rate: {
				type: String,
				required: false
			},
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}
		}
	],

	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: false
	},

	createdAt: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('User_Feeds', schema_project);
module.exports = User;
