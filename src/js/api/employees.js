export async function loadEmployees(limit = 6, { signal } = {}) {
  const url = `https://jsonplaceholder.typicode.com/users?_limit=${limit}`;
  const res = await fetch(url, { signal });

  if (!res.ok) throw new Error('Failed to load employees');

  const users = await res.json();

  return users.map(u => ({
    name: u.name,
    role: u.company.bs,
    photo: `https://picsum.photos/seed/${u.id}/300/200`,
    profile: `https://${u.website}`,
  }));
}
