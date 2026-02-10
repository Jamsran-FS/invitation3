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
            <span className="hero-badge text-[#FCC928]">ХҮНДЭТГЭЛИЙН ЁСЛОЛ</span>
            <h1 className="hero-title text-[#FCC928]">Гавжийн Дамжаа</h1>
            <div className="hero-subtitle">Урилга</div>
          </div>
        </header>

        <div className="content-panel">
          <section className="card card--lifted" id="invite">
            <div className="card-title text-[#782930]">Урилга</div>
            <p className="invite-text font-medium">
              Завхан аймгийн Яруу сумын уугуул,
              Завхан аймгийн Бурхан шашинтны төв Төгс буянт
              Жавхлант хийдийн Цорж лам, өмнөд Энэтхэгийн
              Балдан Брайвүн хийдийн Даш Гоман дацангийн
              Гэвш-цогромба <br/><span className="text-[#782930] font-bold">БАТСУУРИЙН&nbsp;ЭРХЭМБААТАР</span>&nbsp;-ын
              <p className="text-[#782930] font-bold">
                 "Гавжийн дамжаа"
              </p>{" "}
              барих эрдмийн цол хамгаалах
              ёслолд морилон саатаж хамтдаа буян хураахыг урьж байна.
            </p> 
            <p className="invite-highlight text-[#782930] mt-[18px]">Ёслол: 2026.02.21-ны өдрийн 09 цагт эхэлнэ.</p>
            <p className="invite-highlight2 text-[#782930]">Эрдэм номын ариун үйлс дэлгэрэх болтугай.</p>
          </section>

          <section className="section" id="profile">
            <div className="section-head">
              <span className="section-marker" />
              <h2 className="section-title">Товч танилцуулга</h2>
            </div>
            <div className="pattern-card text-justify">
              <p>
                Батсуурь овогтой Эрхэмбаатар миний бие аав ээжийнхээ хайр 
                халамжаар эрүүл саруул өсөж, ачит багш нар, буянт хүмүүнтэй
                учирснаар 2004 онд МБШТөв Гандантэгчэнлин хийдийн
                Дашчойнпэл дацанд хуврагийн мөр барьж, Бурханы шашны ном
                сударт суралцаж эхэлсэн билээ.
              </p>
              <p>
                2005 оноос Бүгд Найрамдах Энэтхэг Улсын Балдан Брайбүн Даш
                Гоман дацанд шавилан сууж, дээдэс мэргэд багш нарыг түшин
                буддын гүн ухааны таван ботийн номлолыг сонсох, санах, дадуулахын 
                үйлд шамдан суралцан, 20 жилийн турш хичээн зүтгэсний үрээр
                2025 оны 10 дугаар сарын 7-ны өдөр Гоман дацан их эрдэнээс 
                Гэвш цогромбын хэргэм хүртэх их хувь тохион амжилттай хамгааллаа.
              </p>
              <p>
                2026 онд өчүүхэн хувраг надад МБШТөв Гандантэгчэнлин хийдийн
                Дашчойнпэл дацан их эрдэнээс &ldquo;Гавж&rdquo; хэмээх эрхэм
                дээд цол хамгаалах хүндтэй хувь хайрласныг хүндэтгэн хүлээн 
                аваад байна.
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

          <section className="section" id="location">
            <div className="section-head">
              <span className="section-marker" />
              <h2 className="section-title">Ёслолын байршил</h2>
            </div>
            <div className="map-card">
              <div className="detail-row">
                <span className="detail-label">Хэзээ:</span>
                <span className="text-justify">
                  Билгийн тооллын XVII жарны “Сүрийг дарагч” хэмээх гал улаан
                  морь жилийн хаврын тэргүүн сарын дөрвөн буюу
                  <span className="text-[#991F2B] font-bold"> 2026.02.21</span>-ны өдөр
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Хаана:</span>
                <span>Гандантэгчэнлин хийдийн Дашчойнпэл дацан</span>
              </div>

              <div className="map-embed" aria-hidden>
                <iframe title="Ёслолын газрын байршил" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2673.7318894421737!2d106.89342337641084!3d47.92222497122047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDU1JzIwLjAiTiAxMDbCsDUzJzQ1LjYiRQ!5e0!3m2!1sen!2smn!4v1770722522590!5m2!1sen!2smn"></iframe>
              </div>
              <div className="location-meta">
                
              <a
                className="btn mt-4"
                href="https://maps.app.goo.gl/xCBoGWCQW5pLqXnJA"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                Ёслолын газар руу очих
              </a>
            </div>
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
                <span className="text-justify">
                  17 цагт
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Хаана:</span>
                <span>Гандантэгчэнлин хийдийн Батцагаан дуган, B1 давхар, Даш ресторан</span>
              </div>
              <div className="flex justify-between px-[4px] mt-6 p-4 rounded-lg">
                <div className="flex items-center gap-2 phone"><CallIcon /><a className="" href="tel:+97691112829">91112829</a></div>
                <div className="flex items-center gap-2 phone"><CallIcon /><a className="" href="tel:+97699582829">99582829</a></div>
              </div>

              <a
                className="btn2"
                href="https://maps.app.goo.gl/pp61ESHcmG59XQ7T7"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                Цайллагын газар руу очих
              </a>
            </div>
          </section>
          
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

function CallIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a1.5 1.5 0 001.5-1.5v-3.75a1.5 1.5 0 00-1.5-1.5h-3.75a1.5 1.5 0 00-1.5 1.5v.375c0 .621-.504 1.125-1.125 1.125a12.375 12.375 0 01-6.75-6.75c0-.621.504-1.125 1.125-1.125h.375a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v1.5z"
      />
    </svg>
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
