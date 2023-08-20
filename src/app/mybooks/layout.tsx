import Header from "@/components/header.components"

export default function MybooksLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <Header/>
        <main>{children}</main>
        </>
    )
  }