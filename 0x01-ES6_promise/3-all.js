/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then((result) => {
	  console.log(
  `${reslt[0].body} ${resut[1].firstName} ${reslt[1].lastName}`,
	  );
  })

  .catch((error) => {
    console.log('Signup system offline');
  });
}
