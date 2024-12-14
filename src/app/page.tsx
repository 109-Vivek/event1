import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <div>
      event 1 website
      {JSON.stringify(session)}
    </div>
  );
}
