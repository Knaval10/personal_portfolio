import { Metadata } from "next";
import "../globals.css";
import AdminSidebar from "./components/AdminNav";
export const metadata: Metadata = {
  title: "Admin Panel | Personal Portfolio",
  description: "Admin panel for managing personal portfolio content",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex h-screen bg-gray-100">
          <AdminSidebar />
          <main className="flex-1 overflow-y-auto p-8 bg-black">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
