import prisma from "../../app/libs/prismadb";
import getSesstion from "./getSession";

const getCurrenUser = async () => {
    try {
        const session = await getSesstion()
        if( !session?.user?.email ) {
            return null
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })

        if( !currentUser ) {
            return null
        }

        return currentUser
        
    } catch(error: any) {
        return null
    }
}
 
export default getCurrenUser;