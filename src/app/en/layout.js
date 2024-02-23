import BaseLayout from "../base-layout";

export const metadata = {
  metadataBase: new URL('https://llcmeme.com/en'),
  title: 'Meme',
  description: 'The official website of Meme, LLC.',
  openGraph: {
    title: 'Meme',
    description: 'LLC Meme｜We are working towards a future where, through social media and virtual 3D experiences, individuals and corporations alike can exert significant influence worldwide. Anticipating the advent of a new form of digital society, Meme is active in leveraging social media and 3D technology from the current stage to enable people and companies to shine brighter.',
    url: 'https://llcmeme.com',
    siteName: 'Meme',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://llcmeme.com/images/open-graph.png',
        width: 1200,
        height: 628,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meme',
    description: 'LLC Meme｜We are working towards a future where, through social media and virtual 3D experiences, individuals and corporations alike can exert significant influence worldwide. Anticipating the advent of a new form of digital society, Meme is active in leveraging social media and 3D technology from the current stage to enable people and companies to shine brighter.',
    creator: '@llcmeme',
    images: [
      {
        url: 'https://llcmeme.com/images/open-graph.png',
        width: 1200,
        height: 628,
      }
    ],
  },
  keywords: ["XR", "3D", "SNS", "Marketing", "Development", "3DCG", "Web Design", "LP", "Marketing Consultant", "Ad Operations"],
  category: "technology",
}

export default function RootLayout({ children }) {
  return (
    <BaseLayout lang="en">
      {children}
    </BaseLayout>
  );
}