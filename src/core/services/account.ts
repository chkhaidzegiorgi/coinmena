export async function login(): Promise<{ token: string }> {
  const response = await Promise.resolve({ token: "some-token" });
  return response;
}
