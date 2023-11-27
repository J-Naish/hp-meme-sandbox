import BaseLayout from "../base-layout";

export default function RootLayout({ children }) {
  return (
    <BaseLayout lang="en">
      {children}
    </BaseLayout>
  );
}