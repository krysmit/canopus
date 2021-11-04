const router = require('express').Router();
const { Clearsky } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const projectData = await Project.create({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
    
        if (!projectData) {
          res.status(404).json({ message: 'No project found with this id!' });
          return;
        }
    
        res.status(200).json(projectData);
      } catch (err) {
        res.status(500).json(err);
      }
  });