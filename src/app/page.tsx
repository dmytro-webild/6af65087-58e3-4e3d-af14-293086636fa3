"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Activity, Star, Truck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Anasayfa",
          id: "hero",
        },
        {
          name: "Hakkımızda",
          id: "about",
        },
        {
          name: "Teknoloji",
          id: "features",
        },
        {
          name: "Robotlar",
          id: "products",
        },
        {
          name: "İletişim",
          id: "contact",
        },
      ]}
      brandName="RescueBot"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Doğal Afetlerde Hayat Kurtaran Teknoloji"
      description="Enkaz altında kalanları tespit eden, otonom arama-kurtarma robotumuz ile geleceğe nefes oluyoruz. Teknofest Vizyonuyla tasarlandı."
      buttons={[
        {
          text: "Keşfet",
          href: "#about",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fantasy-style-half-fox-half-robot_23-2151601024.jpg",
          imageAlt: "search and rescue robot technology",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-robot-hummingbird_23-2151443814.jpg",
          imageAlt: "robotic arm debris clearance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/scene-with-futuristic-robot-used-construction-industry_23-2151329470.jpg",
          imageAlt: "robot navigating disaster zone",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/half-whale-half-robot-fantasy-style_23-2151603077.jpg",
          imageAlt: "Half whale half-robot in fantasy style",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/scene-with-futuristic-robot-used-construction-industry_23-2151329553.jpg",
          imageAlt: "Scene with futuristic robot used in the construction industry",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Biz Kimiz? Afetlere Teknolojiyle Yanıt Veriyoruz.",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/young-man-woman-vr-glasses-doing-experiments-robotics-laboratory-robot-tools_1268-23326.jpg",
          alt: "engineering team robots",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Termal Sensör",
          description: "Canlı tespit teknolojisi.",
          icon: Activity,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/technology-background-texture_23-2148105490.jpg",
              imageAlt: "infrared thermal sensor tech",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/people-colorful-thermal-scan-with-celsius-degree-temperature_23-2149170116.jpg",
              imageAlt: "infrared thermal sensor tech",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/fantasy-style-half-fox-half-robot_23-2151601024.jpg",
          imageAlt: "infrared thermal sensor tech",
        },
        {
          title: "Zorlu Arazi",
          description: "Özel palet sistemi.",
          icon: Truck,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/delivery-robot-futuristic-environment_23-2151189273.jpg",
              imageAlt: "robot track drive system",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-measuring-tools-desk-still-life_23-2150440933.jpg",
              imageAlt: "robot track drive system",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-robot-hummingbird_23-2151443814.jpg",
          imageAlt: "infrared thermal sensor tech",
        },
        {
          title: "Otonom Sürüş",
          description: "AI destekli navigasyon.",
          icon: Star,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/robotic-delivery-dog-factory-concept-robot-dog-delivering-goods_35913-2609.jpg",
              imageAlt: "robot track drive system",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/architectural-blueprints_1359-474.jpg",
              imageAlt: "robot track drive system",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/scene-with-futuristic-robot-used-construction-industry_23-2151329470.jpg",
          imageAlt: "infrared thermal sensor tech",
        },
      ]}
      title="Üstün Robotik Yetenekler"
      description="En zorlu afet koşullarında bile yüksek performans."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "r1",
          name: "Rescue One",
          price: "120.000 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/robot-with-bricks-trowel_1048-3604.jpg",
          imageAlt: "tech robot exhibition model",
        },
        {
          id: "r2",
          name: "Rescue Scout",
          price: "85.000 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-robot-hummingbird_23-2151443854.jpg",
          imageAlt: "tech robot exhibition model",
        },
        {
          id: "r3",
          name: "Rescue Mini",
          price: "45.000 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-car-illustration_23-2151685437.jpg",
          imageAlt: "tech robot exhibition model",
        },
        {
          id: "r4",
          name: "Rescue Max",
          price: "250.000 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-biorobots-concept_23-2149524403.jpg",
          imageAlt: "tech robot exhibition model",
        },
        {
          id: "r5",
          name: "Rescue Air",
          price: "180.000 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/anthropomorphic-robot-performing-regular-human-job-future_23-2151043442.jpg",
          imageAlt: "tech robot exhibition model",
        },
        {
          id: "r6",
          name: "Rescue Deep",
          price: "300.000 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-robot-holding-biotech-pill_183364-118328.jpg",
          imageAlt: "tech robot exhibition model",
        },
      ]}
      title="Robot Modellerimiz"
      description="Farklı görevler için optimize edilmiş platformlar."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "98%",
          title: "Tespit Başarısı",
          description: "Hayat tespiti doğruluğu.",
          imageSrc: "http://img.b2bpic.net/free-photo/progress-mission-move-forward-improvement-concept_53876-15867.jpg",
          imageAlt: "tech data dashboard ui",
        },
        {
          id: "m2",
          value: "24/7",
          title: "Çalışma Süresi",
          description: "Kesintisiz görev.",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-dashboard_23-2151957114.jpg",
          imageAlt: "tech data dashboard ui",
        },
        {
          id: "m3",
          value: "50+",
          title: "Görev Sayısı",
          description: "Deneyim süresi.",
          imageSrc: "http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126353.jpg",
          imageAlt: "tech data dashboard ui",
        },
      ]}
      title="Başarı Verilerimiz"
      description="Sahada kanıtlanmış performans."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        {
          id: "t1",
          name: "Ahmet Yılmaz",
          role: "Proje Lideri",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-car-mechanic-car-repair-shop_23-2150367574.jpg",
          imageAlt: "young engineer portrait tech",
        },
        {
          id: "t2",
          name: "Ayşe Kaya",
          role: "Yazılım Mühendisi",
          imageSrc: "http://img.b2bpic.net/free-photo/female-scientists-analyzing-substance-lab_23-2148492060.jpg",
          imageAlt: "roboticist professional portrait",
        },
        {
          id: "t3",
          name: "Mehmet Demir",
          role: "Mekanik Tasarımcı",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-african-american-programer-sitting-down-working-laptop-arranging-glasses-looking-up-smiling-camera-system-engineer-using-portable-computer-computing-big-data_482257-40598.jpg",
          imageAlt: "project manager tech",
        },
      ]}
      title="Teknoloji Takımımız"
      description="Geleceğin mühendisleri bir arada."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Caner Demir",
          role: "AFAD Uzmanı",
          testimonial: "İnanılmaz bir teknoloji. Kurtarma operasyonlarını değiştirecek.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-taking-notes_23-2149478466.jpg",
          imageAlt: "rescue officer portrait",
        },
        {
          id: "2",
          name: "Selin Işık",
          role: "Kurtarma Personeli",
          testimonial: "Kullanımı kolay ve çok etkili sonuçlar veriyor.",
          imageSrc: "http://img.b2bpic.net/free-photo/paramedic-nurse-emergency-doctor-ambulance-with-kit-paramedic-standing-rear-ambulance-by-open-doors_657921-1447.jpg",
          imageAlt: "rescue officer portrait",
        },
        {
          id: "3",
          name: "Ali Veli",
          role: "Akademisyen",
          testimonial: "Bu çapta bir robot çalışması takdire şayan.",
          imageSrc: "http://img.b2bpic.net/free-photo/hardworking-man-his-work_329181-3055.jpg",
          imageAlt: "rescue officer portrait",
        },
        {
          id: "4",
          name: "Fatma Gül",
          role: "Mühendis",
          testimonial: "Teknoloji ve mühendislik birleşimi harika.",
          imageSrc: "http://img.b2bpic.net/free-photo/brave-fireman-holding-jacket-looking-camera-studio-photo-against-dark-textured-wall_613910-20416.jpg",
          imageAlt: "rescue officer portrait",
        },
        {
          id: "5",
          name: "Burak Öz",
          role: "Kullanıcı",
          testimonial: "Kesinlikle çok güvenilir bir çözüm.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-paramedic-holding-injection_23-2149478547.jpg",
          imageAlt: "rescue officer portrait",
        },
      ]}
      title="Görüşler"
      description="Bize güvenenler."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Robotun pil ömrü ne kadar?",
          content: "24 saat sürekli görev yapabilir.",
        },
        {
          id: "q2",
          title: "Hangi arazilerde çalışır?",
          content: "Enkaz, toprak ve düzensiz yüzeylerde.",
        },
        {
          id: "q3",
          title: "AI nasıl çalışıyor?",
          content: "Görüntü işleme ve ısı sensörleri ile.",
        },
      ]}
      title="Sıkça Sorulan Sorular"
      description="Projemiz hakkında merak edilenler."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static",
      }}
      tag="İletişim"
      title="Bize Ulaşın"
      description="Daha fazla bilgi veya iş birliği için lütfen bizimle iletişime geçin."
      imageSrc="http://img.b2bpic.net/free-photo/futuristic-time-machine_23-2151599395.jpg"
      imageAlt="tech command center desk"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Anasayfa",
              href: "/",
            },
            {
              label: "Hakkımızda",
              href: "#about",
            },
          ],
        },
        {
          items: [
            {
              label: "Projeler",
              href: "#products",
            },
            {
              label: "İletişim",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="RescueBot"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
