async function Handler() {
  const content = { message: 'Hello, World!' };
  return Response.json(content);
}

export { Handler as GET };
