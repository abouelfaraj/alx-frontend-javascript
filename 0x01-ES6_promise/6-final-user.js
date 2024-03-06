import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userData = await signUpUser(firstName, lastName).then((data) => ({
    status: 'fulfilled',
    value: data,
  }));
  const fileData = await uploadPhoto(fileName).catch((err) => ({
    status: 'reject',
    value: err.toString(),
  }));

  return Promise.resolve([userData, fileData]);
}
