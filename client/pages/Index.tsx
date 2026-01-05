import { ArrowRight, Check, Sparkles, Shield, Zap, Award, Car, CarFront, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-secondary/15 text-secondary px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-bold">Prémium LLumar® Fóliázás</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Autófóliázás és épületfóliázás
              </h1>
              <p className="text-lg md:text-xl text-foreground/75 mb-8 leading-relaxed">
                A legmodernebb LLumar® fóliázási technológiával nyújtunk professzionális fóliázási szolgáltatásokat. Budapesttől néhány kilométerre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="font-bold text-primary hover:bg-secondary/90 group py-4" type="button">
                  Kérj ajánlatot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 py-4 font-bold" size="lg" type="button">
                  Tekintsd meg munkáinkat
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-sm text-foreground/70">Elégedett ügyfél</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <p className="text-sm text-foreground/70">Év tapasztalat</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-foreground/70">Garantált minőség</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm overflow-hidden">
                  <img
                  src="/cropped-hajmafolia-logo-12.jpg"
                  alt="HajmaFóliaGarage"
                  className="w-full h-auto object-cover rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Szolgáltatások
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Épület Fóliázás",
                description: "Az egész autót LLumar® ProteXion™ fóliával burkolva"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Ablak Fóliázás",
                description: "UV- és hővédelem gépjárműved ablakaihoz"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Szélvédőn Kőfelverődések Javítása",
                description: "Műhelyünkben, út közben, vagy akár otthonában is!"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Egyedi Megoldások",
                description: "Speciális igényekre szabott fóliázási megoldások"
              }
            ].map((service, idx) => (
              <div key={idx} className="group p-8 rounded-xl border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 bg-card">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="text-secondary group-hover:text-white">{service.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Miért válassz minket?
              </h2>
              <div className="space-y-4">
                {[
                  "LLumar® prémium termékek garanciája",
                  "Tapasztalt és szertifikált szakemberek",
                  "Professzionális telepítés és befejezés",
                  "Hosszú ideig tartó szín- és UV-védelem",
                  "Egyedi design opciók az autódhoz",
                  "Garancia minden munkára"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-2xl p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">LLumar® Prémium Minőség</h4>
                      <p className="text-sm text-muted-foreground">Az iparág legjobb fóliái, teljes UV- és hővédelemmel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Professzionális Telepítés</h4>
                      <p className="text-sm text-muted-foreground">LLumar® szertifik��lt technikusok, precíz munkavégzés</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Lifetime Garancia</h4>
                      <p className="text-sm text-muted-foreground">Minden munkánkra teljes garancia az LLumar® termékeken</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Munkáink Galériája
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Néhány legutóbbi projektünk - teljes burkolás, ablakfóliázás és részleges megoldások
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" className="py-3 font-medium" type="button">
              Összes munka megtekintése
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Rólunk
              </h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                A hajmafolia több mint 8 éve az LLumar® prémium termékek segítségével nyújtanak kiváló autófóliázási szolgáltatásokat. Csapatunk szertifikált szakemberekből áll, akik elkötelezottek a tökéletes kivitelezés mellett.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Minden projekt egyedi: válsz az autó típusához és az ügyfél igényeihez. Az LLumar® termékek hosszú élettartama és UV-védelme garantálja, hogy az autód védelme és külsége évekig kitart.
              </p>
              <div className="flex gap-4">
                <Button variant="default" size="lg" className="py-3 font-medium" type="button">
                  Kapcsolat
                </Button>
                <Button variant="outline" size="lg" className="py-3 font-medium" type="button">
                  Többet tudni
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/10 rounded-2xl blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="text-4xl font-bold text-secondary mb-2">8+</div>
                  <p className="text-sm text-muted-foreground">Év tapasztalat</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Elégedett ügyfél</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Garancia</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                  <p className="text-sm text-muted-foreground">Fóliázott autó</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Áraink
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Az áraim egyéni megrendelés alapján, személyre szabottan készítem el, mivel az függ az autó méretétől, és a Ön által kiválasztott fólia típusától. Az árajánlat kérésre lehetőség van személyesen, telefonon, illetve e-mailen vagy a Kapcsolat menüpont alatti üzenet küldésével. Fólia típusokról bővebb tájékoztatást a Fólia típusok menüpontban találnak.
            </p>
            <p className="text-md text-muted-foreground mt-4">
              Áraink autó típustól függően eltérhetnek,+/- 15%-ban a sztenderd áraktól.
            </p>
            <p className="text-md text-muted-foreground mt-2">
              Sztenderd áraink B oszloptól hátrafelé:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Car className="w-8 h-8" />,
                category: "I.kategória",
                type: "3 ajtós",
                price: "38.000.-"
              },
              {
                icon: <CarFront className="w-8 h-8" />,
                category: "II.kategória",
                type: "5 ajtós",
                price: "45.000.-"
              },
              {
                icon: <Car className="w-8 h-8" />,
                category: "III.kategória",
                type: "sedan",
                price: "50.000.-"
              },
              {
                icon: <Truck className="w-8 h-8" />,
                category: "IV.kategória",
                type: "kombi",
                price: "55.000.-"
              }
            ].map((price, idx) => (
              <div key={idx} className="group p-8 rounded-xl border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 bg-card text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors mx-auto">
                  <span className="text-secondary group-hover:text-white">{price.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">{price.category}</h3>
                <p className="text-muted-foreground text-sm mb-2">{price.type}</p>
                <p className="text-2xl font-bold text-secondary">{price.price}</p>
                <p className="text-xs text-muted-foreground mt-2">B oszloptól hátrafelé</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Áraink bruttóban értendőek és a "LLumar ComfortSeries" típusára vonatkoznak, amelyre 8 év garanciát vállalunk, levállás, felholyagosodás, és fakulás ellen.
          </p>
        </div>
      </section>

      {/* Film Types Section */}
      <section id="film-types" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Fólia típusok
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hamarosan...
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Gyakran Feltett Kérdések
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Válaszok az autófóliázással kapcsolatos legfontosabb kérdésekre
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Meddig tartó az LLumar® fólia?",
                answer: "Az LLumar® prémium autófóliák 7-10 év élettartamúak, attól függően, hogy milyen típust választasz és az időjárási körülményektől. Megfelelő gondozás esetén még ennél is tovább kitartanak."
              },
              {
                question: "Mennyire tart az installálási folyamat?",
                answer: "A teljes autófóliázás általában 2-4 nap, a részleges burkolás 1-2 nap. Az ablak fóliázása 2-3 órát vesz igénybe. A pontos időt az autó típusa és az elvégzendő munka összetettsége határozza meg."
              },
              {
                question: "Használhatom az autómat közvetlenül az installálás után?",
                answer: "Ajánlott, hogy az installálás után 24-48 órát hagyd az autót állni. Ez lehetővé teszi a ragasztónak, hogy teljesen megdermedjen. Ezután normálisan használhatod az autódat."
              },
              {
                question: "Mi a garancia az LLumar® fóliára?",
                answer: "Minden LLumar® termékre 5 év gyártási garancia van. Mi további 5 év garanciát nyújtunk a telepítési munkára. Tehát összesen 10 év garantált védelem."
              },
              {
                question: "Milyen típusú LLumar® fóliák érhetőek el?",
                answer: "Kínálunk teljeskörű választékot: fémes, festék-védelmi (PPF), színes, és átlátszó fóliákat. Az ablakfóliázáshoz különféle árnyalatok, a teljes burkoláshoz pedig egyedi dizájnok érhetőek el."
              },
              {
                question: "Mennyibe kerül az autófóliázás?",
                answer: "Az ár az autó típusától, a fólia típusától és a burkolás terjedelmétől függ. Az ablak fóliázása 30-50 ezer forint között van, a teljes burkolás 200-400 ezer forintba kerülhet. Ingyenes ajánlatot adunk az autó megtekintése után."
              },
              {
                question: "Csökkenti az UV-sugárzást az LLumar® fólia?",
                answer: "Igen! Az LLumar® ablakfóliák 99% UV-sugárzást szűrnek ki, védelmet nyújtva a bőröd és az autó belseje ellen. Ez csökkenti a kockázatát a bőrráknak és megtartja az autó belső anyagait."
              },
              {
                question: "Jogalkalmazási korlátozások vannak az ablakfóliázásra?",
                answer: "Magyarországon az ablak fóliázása megengedett, de vannak szabályok az áttetszőségre. Az elülső ablakoknak legalább 70% áttetszőnek kell lennie. A hátsó és az oldalsó ablakok tetszőlegesen sötétíthetőek. Minden fóliázásunk megfelel a magyar szabályozásnak."
              },
              {
                question: "Hogyan kell gondozni az LLumar® fóliát?",
                answer: "Az LLumar® fólia rendkívül tartós, de ajánljuk az autót kézzel mosni, nem pedig automatikus szondával. Kerüld az erős kémiai tisztítószereket. Az installálás után egy hét alatt kerüld az intenzív vizes mosást."
              },
              {
                question: "Eltávolítható az LLumar® fólia később?",
                answer: "Igen, az LLumar® fóliák eltávolíthatóak szükség szerint. A szertifikált technikusok nyugodtan eltávolítják a fóliát anélkül, hogy az autó festékét károsítanák. Ezt azonban érdemes szakemberrel végeztetni."
              }
            ].map((item, idx) => (
              <details key={idx} className="group border border-border rounded-lg overflow-hidden transition-all">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer bg-card hover:bg-primary/5 transition-colors">
                  <h3 className="font-bold text-primary text-lg">{item.question}</h3>
                  <div className="flex-shrink-0 ml-4 text-primary group-open:rotate-180 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 py-4 bg-primary/2 border-t border-border text-foreground/80">
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/10">
            <p className="text-center text-foreground/80 mb-4">
              Nem találod a válaszot, amit kerestel?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="py-3 font-bold" type="button">
                Vedd fel velünk a kapcsolatot
              </Button>
              <Button variant="outline" size="lg" className="py-3 font-bold" type="button">
                Telefonos konzultáció
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/95 to-primary/85">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Készen állsz az átalakításra?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Lépj kapcsolatba velünk még ma, és kérj egy ingyenes ajánlatot LLumar® fóliázáshoz az autódra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="font-bold text-primary hover:bg-secondary/90 group py-4" type="button">
              Kérj ajánlatot
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 py-4 font-bold" size="lg" type="button">
              Hívj fel minket: +36 1 234 5678
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
