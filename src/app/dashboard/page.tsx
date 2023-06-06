"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  switch (session.status) {
    case "loading": {
      return <div>loading...</div>;
    }
    case "unauthenticated": {
      router.push("/dashboard/login");
    }
    case "authenticated": {
      return <div>Dashboard</div>;
    }
    default:
      return null;
  }
};

export default Dashboard;
