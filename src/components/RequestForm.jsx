import { useState } from "react";
import { supabase } from "../supabase";
import { CheckCircle2, Loader2 } from "lucide-react";

const careTypes = [
  "24/7 Live-in Care",
  "Hourly / Part-time Care",
  "Post-Surgery Recovery",
  "Dementia & Alzheimer's Care",
  "Personal Care",
  "Companionship",
  "Other / Not sure yet",
];

const initialState = {
  name: "",
  phone: "",
  email: "",
  patientAge: "",
  condition: "",
  careType: careTypes[0],
  careMode: "live-in",
  startDate: "",
  city: "",
  notes: "",
};

export default function RequestForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!/^[0-9+\s-]{7,15}$/.test(form.phone.trim())) errs.phone = "Please enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (!form.city.trim()) errs.city = "Please tell us the city or district.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const { error } = await supabase
        .from("caregiver_requests")
        .insert([{ ...form, createdAt: new Date().toISOString() }]);
        
      if (error) throw error;
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error("Error submitting request:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white border border-charcoal/[0.06] p-10 text-center max-w-lg mx-auto">
        <CheckCircle2 size={48} className="text-pine mx-auto mb-4" />
        <h3 className="font-display text-2xl font-semibold text-pine-dark mb-2">Request received</h3>
        <p className="text-charcoal/65 mb-6">
          Thank you — our team will call you shortly to understand your needs and match a caregiver.
          For anything urgent, call us directly at{" "}
          <a href="tel:8050860837" className="text-pine-dark font-semibold underline">80508 60837</a>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-pine-dark underline underline-offset-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white border border-charcoal/[0.06] p-6 sm:p-10 max-w-2xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Your name" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={update("name")}
            className="input-field"
            placeholder="e.g. Priya Suresh"
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field label="Phone number" error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className="input-field"
            placeholder="8050860837"
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label="Email (optional)" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            className="input-field"
            placeholder="you@example.com"
          />
        </Field>

        <Field label="City / District">
          <input
            type="text"
            value={form.city}
            onChange={update("city")}
            className="input-field"
            placeholder="e.g. Coimbatore"
            aria-invalid={!!errors.city}
          />
          {errors.city && <ErrorText text={errors.city} />}
        </Field>

        <Field label="Patient's age">
          <input
            type="number"
            min="0"
            value={form.patientAge}
            onChange={update("patientAge")}
            className="input-field"
            placeholder="e.g. 78"
          />
        </Field>

        <Field label="Condition (optional)">
          <input
            type="text"
            value={form.condition}
            onChange={update("condition")}
            className="input-field"
            placeholder="e.g. Recovering from hip surgery"
          />
        </Field>

        <Field label="Type of care needed">
          <select value={form.careType} onChange={update("careType")} className="input-field">
            {careTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>

        <Field label="Preferred start date">
          <input type="date" value={form.startDate} onChange={update("startDate")} className="input-field" />
        </Field>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-pine-dark mb-2">Care mode</legend>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-[15px] text-charcoal/80">
            <input type="radio" name="careMode" value="live-in" checked={form.careMode === "live-in"} onChange={update("careMode")} />
            Live-in (24/7)
          </label>
          <label className="flex items-center gap-2 text-[15px] text-charcoal/80">
            <input type="radio" name="careMode" value="hourly" checked={form.careMode === "hourly"} onChange={update("careMode")} />
            Hourly visits
          </label>
        </div>
      </fieldset>

      <Field label="Anything else we should know? (optional)" className="mt-5">
        <textarea
          value={form.notes}
          onChange={update("notes")}
          rows={3}
          className="input-field resize-none"
          placeholder="Mobility level, language preference, allergies, etc."
        />
      </Field>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          Something went wrong sending your request. Please try again, or call us directly at 80508 60837.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 w-full inline-flex justify-center items-center gap-2 rounded-full bg-pine hover:bg-pine-dark disabled:opacity-70 text-ivory font-semibold px-7 py-3.5 text-[15px] transition-colors"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending request…
          </>
        ) : (
          "Request a Caregiver"
        )}
      </button>
    </form>
  );
}

function Field({ label, error, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold text-pine-dark mb-1.5">{label}</span>
      {children}
      {error && <ErrorText text={error} />}
    </label>
  );
}

function ErrorText({ text }) {
  return <span className="block text-sm text-red-600 mt-1">{text}</span>;
}
