import { Client, Databases } from "node-appwrite";

const createAdminClient = () => {
  const endpoint =
    process.env.APPWRITE_ENDPOINT ??
    process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;
  const projectId =
    process.env.APPWRITE_PROJECT_ID ??
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!;

  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(process.env.APPWRITE_API_KEY!);

  return {
    get databases() {
      return new Databases(client);
    },
  };
};

export { createAdminClient };
