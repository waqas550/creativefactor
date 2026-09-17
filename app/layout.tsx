import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  // This layout is required by Next.js but we use the [locale] layout for actual content
  return children;
}
