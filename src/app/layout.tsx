import '@/app/globals.css';
import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Next.js SSR POC App',
  description: 'Test SSR and Suspense Render',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
