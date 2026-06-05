import { instance } from "./instance";

export async function getUsers() {
  const res = await instance.get("/users");
  const payload = res.data?.users ?? res.data?.data ?? res.data;
  const arr = Array.isArray(payload) ? payload : [];
  return arr.map((u) => {
    const fallbackName = `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim();
    return {
      id: u.id,
      name:
        u.name !== null && u.name !== undefined
          ? u.name
          : fallbackName || u.username || "",
    };
  });
}
