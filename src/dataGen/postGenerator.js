import { AccordionSummary } from '@material-ui/core';
import { KitchenRounded } from '@material-ui/icons';
import userEvent from '@testing-library/user-event';

import faker, { internet, lorem } from 'faker';

export default function postGenerator(uid) {
  return {
    createdBy: uid,
    email: internet.email(),
    body: lorem.sentences(8),
    summary: lorem.sentence(),
    bug: lorem.sentences(4),
    solution: lorem.sentences(),
    keywords: [...new Array(5)].map((un) => lorem.words()).join(','),
  };
}

/*
  const createPosts = () => {
    [...new Array(10)].forEach((un) => createPost(postGenerator(user.uid)));
  };
  */
