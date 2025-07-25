import * as zod from "zod/v3"
import type { categoryFormZodSchema } from "../../pages/categories/post/categoryFormZodSchema"

export type Category = zod.infer<typeof categoryFormZodSchema>
