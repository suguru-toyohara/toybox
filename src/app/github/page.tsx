'use client'
import SectionTitle from "@/components/misc/SectionTitle";
import GithubActivityCalendar from "@/components/calendar";

export default function Page() {
  return (
    <main className="flex min-w-max flex-col items-center p-24 min-h-screen">
      <SectionTitle title="Github Activity Calendar" />
      <GithubActivityCalendar username='suguru-toyohara'/>
    </main>
  );
}
