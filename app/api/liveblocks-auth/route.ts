import liveblocks from "@/lib/liveblocks";
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  // Get the current user from your database
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");
  const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser;
  
  const user = {
    id,
    info: {
      id,
      name: `${firstName} ${lastName}`,
      email: emailAddresses[0].emailAddress,
      avatar: imageUrl,
      color: getUserColor(id),
    }
  }

  // Create a session for the user
  const session = liveblocks.prepareSession(
    user.info.email,
    {
      userInfo: user.info
    }
  );

  // Give the user access to the room
  session.allow("*", session.FULL_ACCESS);

  // Authorize the user and return the result
  const { status, body } = await session.authorize();
  return new Response(body, { status });
}

// Add GET method to handle authentication requests
export async function GET(request: Request) {
  return new Response("Authentication endpoint", { status: 200 });
}