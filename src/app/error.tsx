'use client';
import SectionTitle from "@/components/misc/SectionTitle";

export default function Error() {
  return (
    <main className="flex min-w-max flex-col items-center p-24">
      <title > Internal server Error </title>
      <SectionTitle title="Something Wrong!" />
      <p className="text-lg m-4"> please contact bluesky @simeji.aceof.technology </p>
    </main>
  );
}