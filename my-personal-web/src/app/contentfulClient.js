
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID, // Variable de entorno para Space ID
  environment: 'master',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN, // Variable de entorno para Access Token
});

export default client;
