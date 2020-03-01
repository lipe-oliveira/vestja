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

<<<<<<< HEAD
=======
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

>>>>>>> 2de35dda14a30d0907838260dd667d5258565845
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},

	createdAt: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('User_Feeds', schema_project);
module.exports = User;
