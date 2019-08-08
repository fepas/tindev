const Dev = require('../models/Dev');

module.exports = {
  async store (request, response) {
    console.log(request.params);
    console.log(request.headers);

    const { devId } = request.params;
    const { user } = request.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return response.status(400).json({ error: 'Dev not exists' });
    }

    loggedDev.dislikes.push(targetDev._id);

    await loggedDev.save();

    return response.json(loggedDev);
  }
};
