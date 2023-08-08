import prisma from "@/app/libs/prismadb";
import getCurrenUser from "./getCurrentUser";

const getConversations = async () => {
    const currentUser = await getCurrenUser();

    if( !currentUser?.id ) {
        return []
    }

    try {
        const conversations = await prisma.conversation.findMany({
            orderBy: {
                lastMessageAt: 'desc'
            },
            where: {
                userIds: {
                    has: currentUser.id
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        sender: true,
                        seen: true
                    }
                }
            }
        })

        return conversations;
    } catch(error) {
        return []
    }
}

export default getConversations