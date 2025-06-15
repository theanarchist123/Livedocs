'use server';

import { currentUser } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import liveblocks from "../liveblocks";

interface UserInfo {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
  try {
    // Ensure we're authenticated
    const user = await currentUser();
    if (!user) {
      throw new Error('Not authenticated');
    }

    // For now, we'll use the email addresses as placeholders
    // This is a temporary solution until we can properly fetch users by email
    const usersData = userIds.map((email) => ({
      id: email,
      name: email.split('@')[0] || 'Unknown User',
      email: email,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${email}`,
    }));

    return parseStringify(usersData);
  } catch (error) {
    console.error(`Error fetching users:`, error);
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