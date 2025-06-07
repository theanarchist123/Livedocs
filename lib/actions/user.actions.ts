'use server';

import { clerkClient } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import liveblocks from "../liveblocks";
import { User } from "@clerk/nextjs/server";

interface UserInfo {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const getClerkUsers = async ({ userIds }: { userIds: string[]}) => {
  try {
    const users = await clerkClient.users.getUserList({
      emailAddress: userIds,
    });

    if (!users || users.length === 0) {
      return parseStringify([]);
    }

    const usersData = users.map((user: User) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
      avatar: user.imageUrl,
    }));

    const sortedUsers = userIds.map((email) => usersData.find((user: UserInfo) => user.email === email));

    return parseStringify(sortedUsers);
  } catch (error) {
    console.log(`Error fetching users: ${error}`);
    return parseStringify([]);
  }
}

export const getDocumentUsers = async ({ roomId, currentUser, text }: { roomId: string, currentUser: string, text: string }) => {
  try {
    const room = await liveblocks.getRoom(roomId);

    const users = Object.keys(room.usersAccesses).filter((email) => email !== currentUser);

    if(text.length) {
      const lowerCaseText = text.toLowerCase();

      const filteredUsers = users.filter((email: string) => email.toLowerCase().includes(lowerCaseText))

      return parseStringify(filteredUsers);
    }

    return parseStringify(users);
  } catch (error) {
    console.log(`Error fetching document users: ${error}`);
  }
}