import { uploadPhoto, createUser } from './utils';

export default async function asyncUploasUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return Promise.resolve({
      photo, user,
    });
  } catch (err) {
    return Promise.resolve({
      photo: null,
      user: null,
    });
  }
}
