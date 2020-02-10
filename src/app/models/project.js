const mongoose = require('../../database/index');
const bcrypt = require('bcryptjs');

const schema_project = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},

	description: {
		type: String,
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		require: true
	},
	tasks: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Task'
		}
	],
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('Project', schema_project);
module.exports = User;
