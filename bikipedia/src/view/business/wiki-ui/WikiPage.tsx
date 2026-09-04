import Image from "next/image";
import styles from "./wiki.module.scss";
import Link from "next/link";

interface MenuItem {
  icon: string;
  title: string;
  href?: string;
}

interface Section {
  title: string;
  items: MenuItem[];
}

const sections: Section[] = [
  {
    title: "Hệ thống theo phân loại",
    items: [
      {
        icon: "📱",
        title: "Mobile KHDN",
        href: "/mobile",
      },
      {
        icon: "💸",
        title: "Internet Banking",
        href: "/web-banking",
      },
      {
        icon: "🖥️",
        title: "Hệ thống MGR",
        href: "/back-office",
      },
      {
        icon: "🏦",
        title: "Core Intellect",
        href: "/back-office",
      },
      {
        icon: "🌐",
        title: "ESB & WSO2",
        href: "/back-office",
      },
    ],
  },
  {
    title: "Tính năng nổi bật",
    items: [
      { icon: "💸", title: "Chuyển tiền NAPAS" },
      {
        icon: "💸",
        title: "Chuyển tiền trong SHB",
      },
      {
        icon: "💸",
        title: "Chuyển tiền ngoại tệ trong nội địa",
      },
      {
        icon: "💸",
        title: "Chuyển tiền trong doanh nghiệp",
      },
    ],
  },
  {
    title: "Tài liệu kỹ thuật",
    items: [
      { icon: "🤝", title: "Danh sách API theo hệ thống" },
      {
        icon: "📚",
        title: "Tài liệu phụ lục",
      },
    ],
  },
  {
    title: "Tools & Quản trị",
    items: [
      { icon: "👤", title: "Người dùng" },
      {
        icon: "⚙️",
        title: "Quản trị hệ thống",
        href: "/admin",
      },
      {
        icon: "🔐",
        title: "Đăng xuất",
        href: "/admin",
      },
    ],
  },
];

const WikiPage = () => {
  return (
    <main className={styles.container}>
      {/* Banner */}
      <header className={styles.banner}>
        <Image
          src="/assets/img/banner.jpg"
          alt="banner"
          fill
          priority
          className={styles.bannerWallpaper}
        />
        <div className={styles.bannerTitle}>
          <div>WIKIPEDIA</div>
          <div className={styles.system}>Khách hàng tổ chức</div>
        </div>

        {/* <div className={styles.bannerSubTitle}>Mô tả nghiệp vụ</div> */}
      </header>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.bannerLogo}>
          <Image
            src="/assets/img/logo-wiki.webp"
            alt="KHDN Wikipedia"
            fill
            priority
            className={styles.logoImage}
          />
        </div>
        <h1>Wikipedia bách khoa toàn thư</h1>

        <div className={styles.grid}>
          {sections.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2>{section.title}</h2>

              <div className={styles.items}>
                {section.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href || "#"}
                    className={styles.item}
                  >
                    <span className={styles.icon}>{item.icon}</span>

                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WikiPage;
