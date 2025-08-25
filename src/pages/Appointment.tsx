import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PageHeader from "@/components/PageHeader";
import { services, packages } from "@/components/data/servicesData"; // Importing shared data

// Country codes for all countries (ISO 3166 + ITU-T E.164)
const countryCodes = [
  { code: "+1" },    // US/Canada/others
  { code: "+7" },    // Russia/Kazakhstan
  { code: "+20" },
  { code: "+27" },
  { code: "+30" },
  { code: "+31" },
  { code: "+32" },
  { code: "+33" },
  { code: "+34" },
  { code: "+36" },
  { code: "+39" },
  { code: "+40" },
  { code: "+41" },
  { code: "+43" },
  { code: "+44" },
  { code: "+45" },
  { code: "+46" },
  { code: "+47" },
  { code: "+48" },
  { code: "+49" },
  { code: "+51" },
  { code: "+52" },
  { code: "+53" },
  { code: "+54" },
  { code: "+55" },
  { code: "+56" },
  { code: "+57" },
  { code: "+58" },
  { code: "+60" },
  { code: "+61" },
  { code: "+62" },
  { code: "+63" },
  { code: "+64" },
  { code: "+65" },
  { code: "+66" },
  { code: "+81" },
  { code: "+82" },
  { code: "+84" },
  { code: "+86" },
  { code: "+90" },
  { code: "+91" },
  { code: "+92" },
  { code: "+93" },
  { code: "+94" },
  { code: "+95" },
  { code: "+98" },
  { code: "+211" },
  { code: "+212" },
  { code: "+213" },
  { code: "+216" },
  { code: "+218" },
  { code: "+220" },
  { code: "+221" },
  { code: "+222" },
  { code: "+223" },
  { code: "+224" },
  { code: "+225" },
  { code: "+226" },
  { code: "+227" },
  { code: "+228" },
  { code: "+229" },
  { code: "+230" },
  { code: "+231" },
  { code: "+232" },
  { code: "+233" },
  { code: "+234" },
  { code: "+235" },
  { code: "+236" },
  { code: "+237" },
  { code: "+238" },
  { code: "+239" },
  { code: "+240" },
  { code: "+241" },
  { code: "+242" },
  { code: "+243" },
  { code: "+244" },
  { code: "+245" },
  { code: "+246" },
  { code: "+247" },
  { code: "+248" },
  { code: "+249" },
  { code: "+250" },
  { code: "+251" },
  { code: "+252" },
  { code: "+253" },
  { code: "+254" },
  { code: "+255" },
  { code: "+256" },
  { code: "+257" },
  { code: "+258" },
  { code: "+260" },
  { code: "+261" },
  { code: "+262" },
  { code: "+263" },
  { code: "+264" },
  { code: "+265" },
  { code: "+266" },
  { code: "+267" },
  { code: "+268" },
  { code: "+269" },
  { code: "+290" },
  { code: "+291" },
  { code: "+297" },
  { code: "+298" },
  { code: "+299" },
  { code: "+350" },
  { code: "+351" },
  { code: "+352" },
  { code: "+353" },
  { code: "+354" },
  { code: "+355" },
  { code: "+356" },
  { code: "+357" },
  { code: "+358" },
  { code: "+359" },
  { code: "+370" },
  { code: "+371" },
  { code: "+372" },
  { code: "+373" },
  { code: "+374" },
  { code: "+375" },
  { code: "+376" },
  { code: "+377" },
  { code: "+378" },
  { code: "+379" },
  { code: "+380" },
  { code: "+381" },
  { code: "+382" },
  { code: "+383" },
  { code: "+385" },
  { code: "+386" },
  { code: "+387" },
  { code: "+389" },
  { code: "+420" },
  { code: "+421" },
  { code: "+423" },
  { code: "+500" },
  { code: "+501" },
  { code: "+502" },
  { code: "+503" },
  { code: "+504" },
  { code: "+505" },
  { code: "+506" },
  { code: "+507" },
  { code: "+508" },
  { code: "+509" },
  { code: "+590" },
  { code: "+591" },
  { code: "+592" },
  { code: "+593" },
  { code: "+594" },
  { code: "+595" },
  { code: "+596" },
  { code: "+597" },
  { code: "+598" },
  { code: "+599" },
  { code: "+670" },
  { code: "+672" },
  { code: "+673" },
  { code: "+674" },
  { code: "+675" },
  { code: "+676" },
  { code: "+677" },
  { code: "+678" },
  { code: "+679" },
  { code: "+680" },
  { code: "+681" },
  { code: "+682" },
  { code: "+683" },
  { code: "+685" },
  { code: "+686" },
  { code: "+687" },
  { code: "+688" },
  { code: "+689" },
  { code: "+690" },
  { code: "+691" },
  { code: "+692" },
  { code: "+850" },
  { code: "+852" },
  { code: "+853" },
  { code: "+855" },
  { code: "+856" },
  { code: "+870" },
  { code: "+871" },
  { code: "+872" },
  { code: "+873" },
  { code: "+874" },
  { code: "+878" },
  { code: "+880" },
  { code: "+881" },
  { code: "+882" },
  { code: "+883" },
  { code: "+886" },
  { code: "+888" },
  { code: "+960" },
  { code: "+961" },
  { code: "+962" },
  { code: "+963" },
  { code: "+964" },
  { code: "+965" },
  { code: "+966" },
  { code: "+967" },
  { code: "+968" },
  { code: "+970" },
  { code: "+971" },
  { code: "+972" },
  { code: "+973" },
  { code: "+974" },
  { code: "+975" },
  { code: "+976" },
  { code: "+977" },
  { code: "+979" },
  { code: "+992" },
  { code: "+993" },
  { code: "+994" },
  { code: "+995" },
  { code: "+996" },
  { code: "+998" },
];

const AppointmentPage = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Group services by category dynamically
  const serviceCategories = Array.from(
    services.reduce((map, service) => {
      if (!map.has(service.category)) {
        map.set(service.category, []);
      }
      map.get(service.category).push(service);
      return map;
    }, new Map<string, typeof services>())
  ).map(([category, services]) => ({ title: category, services }));

  const [selectedServices, setSelectedServices] = useState<typeof services[0][]>([]);
  const [selectedPackages, setSelectedPackages] = useState<typeof packages[0][]>([]);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", countryCode: "+91", phone: "", date: getCurrentDate(), time: getCurrentTime() });

  const toggleService = (service: typeof services[0]) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const togglePackage = (pkg: typeof packages[0]) => {
    if (selectedPackages.includes(pkg)) {
      setSelectedPackages(selectedPackages.filter(p => p !== pkg));
    } else {
      setSelectedPackages([...selectedPackages, pkg]);
    }
  };

  const totalPrice =
    selectedServices.reduce((acc, s) => acc + s.priceINR, 0) +
    selectedPackages.reduce((acc, p) => acc + p.packagePriceINR, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.name === "phone") {
      const inputValue = e.target.value;
      setUserInfo({ ...userInfo, phone: inputValue });
    } else if (e.target.name === "countryCode") {
      setUserInfo({ ...userInfo, countryCode: e.target.value });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    alert(`appointment confirmed! Total: ₹${totalPrice}`);
    // Here you can integrate API call to save appointment
  };

  return (
    <div className="min-h-screen bg-background px-15">
      <section className="py-0 px-15">
        <PageHeader title="Book Your Appointment" description="Select your preferred services or packages" />
      </section>

      {/* Services Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 px-15">
        {serviceCategories.map((category) => (
          <Card key={category.title} className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary mb-2">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {category.services.map((service) => (
                <div
                  key={service.name}
                  className={`flex justify-between items-center p-2 cursor-pointer border rounded mb-2 ${
                    selectedServices.includes(service) ? "bg-primary text-white" : "bg-background"
                  }`}
                  onClick={() => toggleService(service)}
                >
                  <span>{service.name} ({service.durationMinutes} min)</span>
                  <span className="font-semibold">₹{service.priceINR}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Special Packages Header */}
      <section className="mb-6 max-w-4xl mx-auto text-center px-15">
        <h2 className="text-3xl font-extrabold text-primary mb-2">Special Packages</h2>
        <p className="text-lg text-muted-foreground">Explore our curated packages for the best value and experience.</p>
      </section>

      {/* Packages Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-15">
        {packages.map((pkg) => {
          const isSelected = selectedPackages.includes(pkg);
          return (
            <Card key={pkg.name} className="hover:shadow-xl transition-all duration-300 relative">
              {pkg.savingsINR && (
                <div className="absolute top-2 right-2 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                  Save ₹{pkg.savingsINR}
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-primary mb-1">{pkg.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-2">{pkg.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="mb-4">
                  {pkg.services.map((s) => (
                    <li key={s} className="flex items-center text-muted-foreground">
                      • {s}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">
                      Regular: ₹{pkg.regularPriceINR ?? pkg.packagePriceINR + (pkg.savingsINR || 0)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gold text-lg">
                      Package: ₹{pkg.packagePriceINR}
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button size="sm" onClick={() => togglePackage(pkg)}>
                    {isSelected ? "Remove" : "Add"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* appointment Summary */}
      <div className="mb-12 p-6 border rounded bg-secondary px-15">
        <h3 className="text-2xl font-bold mb-4">appointment Summary</h3>
        {selectedServices.length === 0 && selectedPackages.length === 0 ? (
          <p>No services/packages selected.</p>
        ) : (
          <ul className="mb-4">
            {selectedServices.map((s) => (
              <li key={s.name}>{s.name} - ₹{s.priceINR}</li>
            ))}
            {selectedPackages.map((p) => (
              <li key={p.name}>{p.name} - ₹{p.packagePriceINR}</li>
            ))}
          </ul>
        )}
        <p className="font-bold">Total: ₹{totalPrice}</p>
      </div>

      {/* User Info Form */}
      <div className="max-w-xl mx-auto mb-10 space-y-4 px-15">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={userInfo.name}
          onChange={handleInputChange}
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleInputChange}
          className="w-full p-3 border rounded"
        />
        <div className="flex gap-2">
          <select
            name="countryCode"
            value={userInfo.countryCode}
            onChange={handleInputChange}
            className="p-3 border rounded bg-background"
          >
            {countryCodes.map((cc) => (
              <option key={cc.code} value={cc.code}>
                {cc.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={userInfo.phone}
            onChange={handleInputChange}
            className="flex-1 p-3 border rounded"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="date"
            name="date"
            value={userInfo.date}
            onChange={handleInputChange}
            className="flex-1 p-3 border rounded"
          />
          <input
            type="time"
            name="time"
            value={userInfo.time}
            onChange={handleInputChange}
            className="flex-1 p-3 border rounded"
          />
        </div>
      </div>

      {/* Confirm Button */}
      <div className="text-center px-15">
        <Button size="lg" variant="luxury" onClick={handleSubmit}>
          Confirm appointment
        </Button>
      </div>

      <footer className="bg-secondary text-center py-6 mt-12 px-15">
        &copy; {new Date().getFullYear()} Scissor Salon. All rights reserved.
      </footer>
    </div>
  );
};

export default AppointmentPage;