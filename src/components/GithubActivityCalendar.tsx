import ActivityCalendar, { Activity } from 'react-activity-calendar';

export function GithubActivityCalendar(props: { data: Activity[] }) {
  return (
    <>
      <ActivityCalendar colorScheme="dark" data={props.data} />
    </>
  );
}
