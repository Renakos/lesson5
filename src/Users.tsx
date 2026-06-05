import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./getUsers";

type User = {
  id: number;
  name: string;
};

const Users = () => {
  const { data, isPending, isError, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  console.log("Данные:", data);
  const users = data ?? [];

  if (isPending) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>{(error as Error)?.message ?? "Неизвеcтная ошибка"}</div>;
  }

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default Users;
