import { Providers } from "@/components/providers/providers";
 
export default function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
 