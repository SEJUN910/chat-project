import prisma from "@/app/libs/prismadb";
import getCurrenUser from "./getCurrentUser";

const getConversationById = async (
    conversationId: string
) => {
    try{
        const currentUser = await getCurrenUser()

        if( !currentUser?.email ) {
            return null
        }

        const conversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                users: true
            }
        })

        return conversation
    } catch(e) {
        return null;
    }
}

export default getConversationById