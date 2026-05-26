export default defineEventHandler(async (event) => {

  const path = event.path;

  const redirects = [
    {
      from: "/old-news",
      to: "/news",
      type: 301,
    },
  ];

  const match = redirects.find(
    (r) => r.from === path
  );

  if (match) {
    return sendRedirect(
      event,
      match.to,
      match.type
    );
  }
});