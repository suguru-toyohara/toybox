enum methodType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export type Activity = {
  date: string;
  count: number;
  level: number;
}

export default methodType;
