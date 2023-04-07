import { store } from "@/stores"

export function ProfileBar() {
  console.log("---", store.getState().user)
  const { user } = store.getState().user;

  return (
    <div>
      Active user: <b>{user.name}</b>
    </div>
  );
}
