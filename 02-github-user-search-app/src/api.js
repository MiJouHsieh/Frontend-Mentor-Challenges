import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export const fetchUserData = async (username) => {
  try {
    const response = await octokit.rest.users.getByUsername({
      username,
    });
    console.log('response.data: ', response.data)
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('User not found');
  }
};