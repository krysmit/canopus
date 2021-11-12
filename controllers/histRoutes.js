const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const projectData = await Project.findAll({
        include: [
          {
            model: User,
            attributes: ['city'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const projects = projectData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('searchhistory', { 
        projects, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


//using withAuth middleware
router.get('/searchhistory', withAuth, async (req, res) => {
    try {
        const userData = await  User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Project }],
        });
        const user = userData.get({ plain: true});

        res.render('searchhistory', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//if already logged in, redirect the request
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/project');
        return;
    }
    res.render('login');
});

module.exports = router;