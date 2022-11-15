export async function login(
  username: string,
  password: string
): Promise<{ token: string } | null> {
  const result =
    username === "123" && password === "123" ? { token: "token" } : null;
  const response = await Promise.resolve(result);
  return response;
}
