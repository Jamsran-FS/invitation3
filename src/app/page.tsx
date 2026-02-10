"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const schedule = [
    {
      time: "09:00 - 09:30",
      title: "Гавжийн дамжаа барих хурал",
      Icon: BookIcon,
    },
    {
      time: "10:30 - 11:45",
      title: "Таван ботийн цамжар шүн уншлага",
      Icon: ScrollIcon,
    },
    {
      time: "11:45 - 12:30",
      title: "Номын хэлэлцүүлэг",
      Icon: ChatIcon,
    },
    {
      time: "12:30 - 13:00",
      title: "Даж эргүүлэх ёслол",
      Icon: LotusIcon,
    },
    {
      time: "13:00 - 16:00",
      title: "Номын хэлэлцүүлэг",
      Icon: ChatIcon,
    },
    {
      time: "16:00 - 17:00",
      title: "Гэвш-цогромба Батсуурийн Эрхэмбаатарт баяр хүргэн, хадаг өргөх",
      Icon: CupIcon,
    },
  ];

  const navItems = useMemo(
    () => [
      { id: "home", label: "Нүүр", Icon: HomeIcon },
      { id: "profile", label: "Танилцуулга", Icon: TextIcon },
      { id: "schedule", label: "Хөтөлбөр", Icon: ScrollIcon },
      { id: "banquet", label: "Цайллага", Icon: CalendarIcon },
      // { id: "location", label: "Байршил", Icon: PinIcon },
    ],
    []
  );

  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.4, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <div className="page">
      <main className="shell">
        <header className="hero" id="home">
          <div className="hero-photo" role="img" aria-label="Хүндэтгэлийн зураг">
            <img src="/background.jpg" className="w-full h-full object-cover" alt="Хүндэтгэлийн зураг" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="hero-text pt-2 align-items-center">
            <span className="hero-badge">ХҮНДЭТГЭЛИЙН ЁСЛОЛ</span>
            <h1 className="hero-title">Гавжийн Дамжаа</h1>
            <div className="hero-subtitle">Урилга</div>
          </div>
        </header>

        <div className="content-panel">
          <section className="card card--lifted" id="invite">
            <div className="card-title">Урилга</div>
            <p className="invite-text font-medium">
              Завхан аймгийн Яруу сумын уугуул,
              Завхан аймгийн Бурхан шашинтны төв Төгс буянт
              Жавхлант хийдийн Цорж лам, өмнөд Энэтхэгийн
              Балдан Брайвүн хийдийн Даш Гоман дацангийн
              Гэвш-цогромба <span className="text-[#A17553] font-bold">БАТСУУРИЙН ЭРХЭМБААТАР</span>-ын 
              <span className="text-[#A17553] font-bold ml-[6px]">
                &ldquo;Гавжийн дамжаа&rdquo;
              </span>{" "}
              барих эрдмийн цол хамгаалах
              ёслолд морилон саатахыг урин залж байна.
            </p>
            <p className="invite-highlight">Эрдэм номын ариун үйлс дэлгэрэх болтугай.</p>
          </section>

          <section className="section" id="profile">
            <div className="section-head">
              <span className="section-marker" />
              <h2 className="section-title">Товч танилцуулга</h2>
            </div>
            <div className="pattern-card text-justify">
              <p>
                Батсуурь овогтой Эрхэмбаатар миний бие аав ээжийнхээ хайр,
                хамаат садан, багш нар, бурхан шашны сүсэгтэн олны хайр,
                буяны хүчлээр 2004 онд МБШТөв-Гандантэгчэнлин хийдийн
                Дашчойнпэл дацанд хуврагийн мөр барьж, Бурханы шашны ном
                сударт суралцах хүсэл бий болсон.
              </p>
              <p>
                2005 оноос Бүгд Найрамдах Энэтхэг Улсын Бодхгая Браймэн Даши
                Гомпа дацанд шавилан сууж, язгуур төрөл багш нарын тушаал
                ёсны удирдлага дор амь амьдралынхаа чухал үеийг өнгөрүүлсэн.
                20 жилийн турш их хянан зүтгэсний үрээр 2025 оны 10 дүгээр
                сарын нэг өдөр Ом манэ падмэ хум номын 1113 удаа гүшг
                цэвэрлэлийн хурал уншиж, үргэлжлүүлэн хүржих, их хүржих
                тоглоом ажиллагаа явдалд оролцсоор явна.
              </p>
              <p>
                2026 онд Өндөрхэр багшийн урьдчилсан шалгалт өгч, “Гавж”
                хэмээх эрхэм дээд цол хамгаалах хүндэт үйл явдалд оролцоно.
              </p>
            </div>
          </section>

          <section className="section" id="schedule">
            <div className="section-head">
              <span className="section-marker" />
              <h2 className="section-title">Үйл ажиллагааны хөтөлбөр</h2>
            </div>
            <div className="timeline">
              {schedule.map((item) => (
                <div className="timeline-item" key={item.time}>
                  <div className="timeline-icon" aria-hidden>
                    <item.Icon />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-time font-bold">{item.time}</div>
                    <p className="timeline-title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="banquet">
            <div className="section-head">
              <span className="section-marker" />
              <h2 className="section-title">Хүндэтгэлийн цайллага</h2>
            </div>
            <div className="pattern-card">
              <div className="detail-row">
                <span className="detail-label">Хэзээ:</span>
                <span>
                  Билгийн тооллын XVII жарны “Суварга дарагч” хэмээх гал улаан
                  морь жилийн хаврын тэргүүн сарын дөрвөн буюу
                  2026.02.21-ний өдөр
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Хаана:</span>
                <span>Гандантэгчэнлин хийдийн Дашчойнпэл дацан</span>
              </div>
            </div>
          </section>

          <section className="section" id="location">
            <div className="section-head">
              <span className="section-marker" />
              <h2 className="section-title">Ёслолын байршил</h2>
            </div>
            <div className="map-card">
              <div className="map-embed" aria-hidden>
                <iframe
                  title="Ёслолын газрын байршил"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.722796385405!2d106.8960101!3d47.9224009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692f6664fffff%3A0xb03a5996ff4302fd!2sDashchoimpil%20Datsan!5e0!3m2!1sen!2smn!4v1770615165418!5m2!1sen!2smn"
                />
              </div>
              <div className="location-meta">
                <div className="meta-row">
                  <span className="meta-icon" aria-hidden>
                    <PinIcon />
                  </span>
                  <div>
                    Гандантэгчэнлин хийд
                    <br />
                    Дашчойнпэл дацан
                  </div>
                </div>
              <a
                className="btn"
                href="https://maps.app.goo.gl/R2oBoEsTGHVUWGMRA"
                target="_blank"
                rel="noreferrer"
              >
                Ёслолын газар руу очих
              </a>
            </div>
          </div>
          </section>

          {/* <section className="section" id="reception">
            <div className="section-head">
              <span className="section-marker" />
              <h2 className="section-title">Цайллагын байршил</h2>
            </div>
            <div className="map-card">
              <div className="location-meta">
                <div className="meta-row">
                  <span className="meta-icon" aria-hidden>
                    <HallIcon />
                  </span>
                  <div>
                    Grand Hill Event Hall
                    <br />
                    17-р давхар, БГД 2
                  </div>
                </div>
                <div className="meta-row">
                  <span className="meta-icon" aria-hidden>
                    <ClockIcon />
                  </span>
                  <div>17:00 цагт</div>
                </div>
                <div className="meta-row">
                  <span className="meta-icon" aria-hidden>
                    <PhoneIcon />
                  </span>
                  <div>
                    <a href="tel:+97689933013">89933013</a> ·{" "}
                    <a href="tel:+97699049740">99049740</a>
                  </div>
                </div>
                <a className="btn btn--dark" href="https://maps.google.com">
                  Цайллагын газар руу очих
                </a>
              </div>
            </div>
          </section> */}
{/* © 2026 Гавжийн Дамжаа */}
          <footer className="footer"></footer>
        </div>

        <nav className="dock" aria-label="Үндсэн холбоосууд">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              data-active={activeId === item.id}
              onClick={() => setActiveId(item.id)}
            >
              <item.Icon />
            </a>
          ))}
        </nav>
      </main>
    </div>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <path
        d="M6 4.5h9a2.5 2.5 0 0 1 2.5 2.5v11.5H8.5A2.5 2.5 0 0 0 6 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 4.5v14A2.5 2.5 0 0 1 8.5 16h9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScrollIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <path
        d="M6.5 4h8.5a3 3 0 0 1 0 6h-7a3 3 0 0 0 0 6h9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7a3 3 0 0 0 0 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <path
        d="M7 16l-3 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8h7M8 12h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LotusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <path
        d="M12 6c1.2 2.2 1.8 4.1 1.8 5.6 0 2.5-1.1 4.4-1.8 6-0.7-1.6-1.8-3.5-1.8-6C10.2 10.1 10.8 8.2 12 6z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M6 10c1.7.8 2.9 1.9 3.7 3.1-1.5.2-3.1 0-4.7-.9C3.6 11.5 3 10.7 3 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 10c-1.7.8-2.9 1.9-3.7 3.1 1.5.2 3.1 0 4.7-.9 1.4-.7 2-1.5 2-2.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CupIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <path
        d="M5 7h11v4a5 5 0 0 1-5 5H9a4 4 0 0 1-4-4V7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8h2a2 2 0 1 1 0 4h-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M4 11.5L12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-5h-4v5H5a1 1 0 0 1-1-1v-8.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M6 4v3M18 4v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}


function TextIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M4 6h16M8 10h12M4 14h16M8 18h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
