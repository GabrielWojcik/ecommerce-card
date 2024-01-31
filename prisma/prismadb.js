import { PrismaClient } from "@prisma/client";

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;

// import { PrismaClient } from '@prisma/client';

// const client = new PrismaClient();

// export default client;