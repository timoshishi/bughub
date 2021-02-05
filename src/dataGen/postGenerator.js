import { internet, lorem } from 'faker';

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
Use in PostForm.js - replace onSubmit function body with this
    const createPosts = (postQty) => {
      [...new Array(postQty)].forEach((un) =>
        createPost(postGenerator(user.uid))
      );
    };
    createPosts(10);
  */
