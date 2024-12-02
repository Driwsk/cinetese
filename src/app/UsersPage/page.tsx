import { auth } from "@/auth"

export default async function UsersPage() {
    const session = await auth()

    return (
        <>
            <div>Teste Routers{session?.user?.name}</div>
            <div className="flex w-full flex-col gap-4"></div>
        </>
    );
}