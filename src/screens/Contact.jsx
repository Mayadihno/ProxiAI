import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

const Contact = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    country: "",
    jobTitle: "",
    jobDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(customerData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = `${key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (s) => s.toUpperCase())} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "customerFeedbackbolu"), {
        ...customerData,
        timestamp: Date.now(),
      });

      toast.success("Feedback submitted successfully!");
      setCustomerData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        country: "",
        jobTitle: "",
        jobDetails: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Error submitting feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white md:py-20 py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-2">Company Info</h3>
              <p className="text-gray-600">ProxiAI Innovations Ltd.</p>
              <p>123 Main Street, Sunderland, United Kingdom.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-600 font-medium">+1 (555) 123-4567</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-600 font-medium">contact@proxiai.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-xl"
          >
            {[
              {
                label: "Name",
                name: "name",
                type: "text",
                placeholder: "John Doe",
              },
              {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "you@example.com",
              },
              {
                label: "Phone",
                name: "phone",
                type: "text",
                placeholder: "+1 234 567 8901",
              },
              {
                label: "Company Name",
                name: "companyName",
                type: "text",
                placeholder: "Your Company",
              },
              {
                label: "Country",
                name: "country",
                type: "text",
                placeholder: "USA",
              },
              {
                label: "Job Title",
                name: "jobTitle",
                type: "text",
                placeholder: "Product Manager",
              },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label className="block text-sm font-medium mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={customerData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                    errors[name] ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors[name] && (
                  <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-1">
                Job Details
              </label>
              <textarea
                name="jobDetails"
                rows={4}
                value={customerData.jobDetails}
                onChange={handleChange}
                placeholder="Describe your role or what you’re working on..."
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                  errors.jobDetails ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.jobDetails && (
                <p className="text-red-500 text-sm mt-1">{errors.jobDetails}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
