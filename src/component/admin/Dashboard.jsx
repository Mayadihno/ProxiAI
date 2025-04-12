import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "customerFeedbackbolu")
        );
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <React.Fragment>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Customer Feedback Dashboard
        </h1>

        {loading ? (
          <p className="text-gray-500 text-center">Loading feedbacks...</p>
        ) : feedbacks.length === 0 ? (
          <p className="text-gray-500 text-center">No feedback available.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {feedbacks.map((fb) => (
              <div
                key={fb.id}
                className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                  {fb.name || "Anonymous"}
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Email:</strong> {fb.email || "—"}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Phone:</strong> {fb.phone || "—"}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Company:</strong> {fb.companyName || "—"}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Country:</strong> {fb.country || "—"}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Job Title:</strong> {fb.jobTitle || "—"}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Job Details:</strong>
                  <br />
                  {fb.jobDetails || "—"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
