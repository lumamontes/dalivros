import Header from "@/components/header.components"

export default function ProductDetailsLayout({
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