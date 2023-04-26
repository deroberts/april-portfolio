import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const getRepositories = async () => {
  const response = await axios.get(`${GITHUB_API_URL}/user/repos`, {
    headers: {
      Authorization: `Bearer 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`,
    },
  });

  const repositories = response.data.map((repository) => ({
    name: repository.name,
    description: repository.description,
    url: repository.html_url,
  }));

  return repositories;
};

export default getRepositories;
