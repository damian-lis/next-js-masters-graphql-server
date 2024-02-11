import { prisma } from "../../../../db.js";
import type { QueryResolvers } from "../../../types.generated.js";

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  _args,
  _ctx,
) => {
  const allProducts = await prisma.product.findMany();
  return allProducts;
};
