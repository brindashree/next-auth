"use client";

import { useCurrenRole } from "@/hooks/use-current-role";

const AdminPage = () => {
  const role = useCurrenRole();
  return (
    <div>
      Current role:
      {role}
    </div>
  );
};
export default AdminPage;
