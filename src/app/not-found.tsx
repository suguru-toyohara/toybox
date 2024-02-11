import SectionTitle from "@/components/misc/SectionTitle";

export const runtime = "edge";

export default function NotFound() {
  return (
    <main className="flex min-w-max flex-col items-center p-24">
      <title > 404: Not Found </title>
      <SectionTitle title="404 Not Found" />
      <p className="text-lg m-4"> This is not-found error page, it is displayed when page is not routed.</p>
    </main>
  );
}
