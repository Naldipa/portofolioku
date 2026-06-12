import Footer from "@/components/Footer";

export const metadata = {
  title: "Naldi | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
