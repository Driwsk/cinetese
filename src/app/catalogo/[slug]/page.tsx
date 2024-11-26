import ButtonHome from "@/app/components/buttonHome";


export default async function Page({ params }: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug
    return (
        <>
        <div>teste {slug}</div>
        <div>
        <ButtonHome />
        </div>
        </>
    )
}