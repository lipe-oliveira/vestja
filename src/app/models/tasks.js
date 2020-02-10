const mongoose = require('../../database/index');
const bcrypt = require('bcryptjs');

const schema_project = new mongoose.Schema({
	title: {
		type: String,
		require: true
	},

	project: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Project',
		require: true
	},

	assignedTo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		require: true
	},

	completed: {
		type: Boolean,
		require: true,
		default: false
	},

	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		require: true
	},

	createdAt: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('Task', schema_project);
module.exports = User;
