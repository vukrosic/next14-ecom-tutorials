import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import Hero4 from "@/components/Hero4";
import Image from "next/image";

export default function Home() {
  const heroData = [
    {
      imageUrl: '/tap1.webp',
      title: 'Welcome to Our Platform',
      subtitle: 'Discover amazing features and possibilities',
      buttonText: 'Get Started',
    },
    {
      imageUrl: '/tap1.webp',
      title: 'Revolutionize Your Workflow',
      subtitle: 'Boost productivity with our cutting-edge tools',
      buttonText: 'Learn More',
    },
    {
      imageUrl: '/tap1.webp',
      title: 'Join Our Community',
      subtitle: 'Connect with like-minded professionals',
      buttonText: 'Sign Up Now',
    },
    {
      imageUrl: '/tap1.webp',
      title: 'Transform Your Business',
      subtitle: 'Unlock new opportunities with our solutions',
      buttonText: 'Explore',
    },
  ];
  return (
    <div>
      Check other pages for products.
      Find tutorials on my channel: https://www.youtube.com/channel/UC7XJj9pv_11a11FUxCMz15g
    </div>
  );
}
