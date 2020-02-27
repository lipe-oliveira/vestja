const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Tasks = require('../models/tasks');
const authMiddleware = require('../middlewares/auth');

console.log('/projectController.js');

//router.use(authMiddleware);

router.get('/', async (req, res) => {
	try {
		const project = await Project.find().populate(['user', 'tasks']);
		return res.send({ project });
	} catch (err) {
		console.log(`erro: ${err}`);
		return res.status(400).send({ erro: 'Cannot create new project!' });
	}
});

router.get('/:projectId', async (req, res) => {
	try {
		const project = await Project.findById(req.params.projectId).populate(['user', 'tasks']);
		return res.send({ project });
	} catch (err) {
		console.log(`erro: ${err}`);
		return res.status(400).send({ erro: 'Cannot create new project!' });
	}
});

router.post('/', async (req, res) => {
	try {
		console.log(req.body);
		const { title, description, tasks } = req.body;
		const project = await Project.create({ title, description, user: req.userId });

		await Promise.all(
			tasks.map(async (task) => {
				const projectTask = new Tasks({ ...task, project: project._id });
				await projectTask.save();
				project.tasks.push(projectTask);
			})
		);

		await project.save();

		return res.send({ project });
	} catch (err) {
		console.log(`erro: ${err}`);
		return res.status(400).send({ erro: 'Cannot create new project!' });
	}
});

router.put('/', async (req, res) => {
	try {
		const { title, description, tasks } = req.body;
		const project = await Project.findByIdAndUpdate(
			req.params.projectId,
			{
				title,
				description
			},
			{ new: true }
		);

		project.tasks = [];
		await Tasks.remove({ project: projectId });

		await Promise.all(
			tasks.map(async (task) => {
				const projectTask = new Tasks({ ...task, project: project._id });
				await projectTask.save();
				project.tasks.push(projectTask);
			})
		);

		await project.save();

		return res.send({ project });
	} catch (err) {
		console.log(`erro: ${err}`);
		return res.status(400).send({ erro: 'Cannot create new project!' });
	}
});

router.delete('/:projectId', async (req, res) => {
	try {
		const project = await Project.findByIdAndRemove(req.params.projectId);
		return res.send();
	} catch (err) {
		console.log(`erro: ${err}`);
		return res.status(400).send({ erro: 'Cannot delete  project!' });
	}
});

module.exports = (app) => {
	app.use('/projects', router);
};
