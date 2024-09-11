"use server";

// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
// import { auth } from '@/auth';
import { db } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@prisma/client";
import { hashPassword } from "@/lib/hash-password";
// import paths from '@/paths';

const createPostSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

interface CreatePostFormState {
  errors: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
}

export async function createUser(
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const result = createPostSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const hashedPassword = await hashPassword(result.data.password, 10);

  let user: User;
  try {
    user = await db.user.create({
      data: {
        email: result.data.email,
        password: hashedPassword,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Failed to create post"],
        },
      };
    }
  }
  // console.log(user);

  //   revalidatePath(paths.topicShow(slug));
  //   redirect(paths.postShow(slug, post.id));
  redirect("/api/login");
}
