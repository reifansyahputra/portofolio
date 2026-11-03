import Image from "next/image";

const achievements = [
  {
    medal: "🥈",
    title: "Juara 2",
    category: "Kategori Tunggal",
    competition:
      "SINGLE STROKE OVER 50 TH KEJUARAAN WOODBALL DKI JAKARTA, TINGKAT PELAJAR",
    year: "2024",
  },
  {
    medal: "🥉",
    title: "Juara 3",
    category: "Kategori Beregu",
    competition: "TIM STROKE KEJUARAAN NASIONAL WOODBALL KU 18 TIM PUTRA",
    year: "2026",
  },
];

const navigation = [
  ["Beranda", "#home"],
  ["Profil", "#profil"],
  ["Prestasi", "#prestasi"],
  ["Galeri", "#galeri"],
  ["Kontak", "#kontak"],
];

export default function Home() {
  return (
    <>
      <header>
        <nav className="navbar">
          <h2 className="logo">
            WOOD<span>BALL</span>
          </h2>
          <ul className="nav-links">
            {navigation.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="subtitle">PORTOFOLIO ATLET</p>
            <h1>
              Perjalanan Prestasi
              <br />
              <span>Atlet Woodball</span>
            </h1>
            <p>
              Dedikasi, disiplin, dan semangat untuk meraih prestasi melalui
              olahraga Woodball.
            </p>
            <a href="#prestasi" className="btn">
              Lihat Prestasi
            </a>
          </div>

          <div className="hero-image">
            <Image
              className="rounded-2xl shadow-xl ring-4 ring-white/20"
              src="/atlet-reifan.jpeg"
              alt="Reifan Syahputra Ramadhan memegang medali dan sertifikat"
              width={1200}
              height={1600}
              priority
            />
          </div>
        </section>

        <section className="profil section" id="profil">
          <div className="section-title">
            <p>TENTANG SAYA</p>
            <h2>Profil Atlet</h2>
          </div>

          <div className="profil-card">
            <div className="profil-image">
              <Image
                src="/atlet-reifan.jpeg"
                alt="Reifan Syahputra Ramadhan memegang medali dan sertifikat"
                width={1200}
                height={1600}
              />
            </div>

            <div className="profil-info">
              <h3>Reifan Syahputra Ramadhan</h3>
              <p>
                Saya adalah seorang atlet Woodball yang memiliki semangat
                tinggi dalam berlatih dan berkompetisi. Melalui olahraga ini,
                saya belajar tentang kedisiplinan, konsentrasi, sportivitas,
                dan kerja keras.
              </p>

              <div className="biodata">
                <p>
                  <strong>Nama:</strong> Reifan Syahputra Ramadhan
                </p>
                <p>
                  <strong>Sekolah:</strong> SMK NEGERI 71 JAKARTA
                </p>
                <p>
                  <strong>Cabang Olahraga:</strong> Woodball
                </p>
                <p>
                  <strong>Posisi:</strong> Atlet Woodball
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="prestasi section" id="prestasi">
          <div className="section-title">
            <p>PERJALANAN KOMPETISI</p>
            <h2>Prestasi Saya</h2>
          </div>

          <div className="prestasi-container">
            {achievements.map((achievement) => (
              <div className="prestasi-card" key={achievement.title}>
                <div className="medali">{achievement.medal}</div>
                <h3>{achievement.title}</h3>
                <p className="kategori">{achievement.category}</p>
                <p className="kompetisi">{achievement.competition}</p>
                <span className="tahun">{achievement.year}</span>
              </div>
            ))}
          </div>

          <p className="catatan">
            * Ganti nama kejuaraan, kategori, dan tahun sesuai prestasi yang
            benar-benar kamu raih.
          </p>
        </section>

        <section className="galeri section" id="galeri">
          <div className="section-title">
            <p>MOMEN TERBAIK</p>
            <h2>Galeri Woodball</h2>
          </div>

          <div className="galeri-container">
            <div className="galeri-item">
              <Image
                src="/foto-prestasi-woodball.png"
                alt="Atlet Woodball berfoto bersama pelatih dan rekan satu tim"
                width={768}
                height={768}
              />
              <div className="overlay">Penghargaan</div>
            </div>
          </div>
        </section>

        <section className="kontak section" id="kontak">
          <div className="section-title">
            <p>HUBUNGI SAYA</p>
            <h2>Kontak</h2>
          </div>

          <div className="kontak-box">
            <p>Terima kasih telah mengunjungi portofolio prestasi saya.</p>
            <p>Email: xyzzfann0109@gmail.com</p>
            <p>Instagram: @fannrmdhn</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Portofolio Prestasi Woodball. Dibuat dengan semangat.</p>
      </footer>
    </>
  );
}
