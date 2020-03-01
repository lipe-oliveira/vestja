mongoose = require('mongoose');

const schema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},

	ingredientes: [
		{
			ingrediente: {
				type: String,
				required: true
			},
			quantidade: {
				type: String,
				require: false
			}
		}
	],

	descrição: {
		type: String,
		required: false
	},

	imagem: {
		type: Buffer
		//required:true
	}
});

const receitas = mongoose.model('receitas', schema);
module.exports = receitas;
