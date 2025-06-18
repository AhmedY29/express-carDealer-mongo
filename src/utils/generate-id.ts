import { monotonicFactory } from "ulid";
// Generate Uniq id using lib ulid
const ulid = monotonicFactory();

export const generateId = () => {
  return ulid();
};