import server from './server'

const PORT: any = process.env.PORT ?? 3001;

server.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
