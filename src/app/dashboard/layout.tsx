import Header from "@/components/header.components"

export default function DashboardLayout({
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