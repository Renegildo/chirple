import express from 'express';
import authentication from './authentication';
import servers from './servers';
import channels from './channels';
import invites from './invites';
import messages from './messages';
import users from './users';
import emojis from './emojis';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  servers(router);
  channels(router);
  invites(router);
  messages(router);
  users(router);
  emojis(router);

  return router;
};
