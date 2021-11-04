const router = require('express').Router();
const { Clearsky } = require('../../models');
const withAuth = require('../../utils/auth');