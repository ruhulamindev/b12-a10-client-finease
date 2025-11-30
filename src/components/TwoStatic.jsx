import React from "react";

const TwoStatic = () => {
  return (
    <div>
      <section className="my-4 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Budgeting Tips</h2>
        <ul className="list-disc ml-6">
          <li>Track your expenses daily</li>
          <li>Set monthly savings goals</li>
          <li>Prioritize needs over wants</li>
        </ul>
      </section>
      <section className="my-4 p-6 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">
          Why Financial Planning Matters
        </h2>
        <p>
          Financial planning helps you save, invest wisely, and achieve
          long-term financial security. It reduces stress and helps in making
          informed decisions.
        </p>
      </section>
      {/* FAQ Section */}
      <section className="my-10 space-y-2">
        <h1 className="text-2xl text-gray-400 text-center my-6 font-bold">
          <span>Important</span> Key Rules (FAQ)
        </h1>

        <section
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg"
        >
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </section>

        <section
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg"
        >
          <div className="collapse-title font-semibold">What is FinEase?</div>
          <div className="collapse-content text-sm">
            FinEase is a personal finance management web app where you can track
            income, expenses, and set savings goals.
          </div>
        </section>

        <section
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg"
        >
          <div className="collapse-title font-semibold">
            How do I add a transaction?
          </div>
          <div className="collapse-content text-sm">
            Login to your account, go to 'Add Transaction' page, fill in the
            required fields and click 'Add Transaction'.
          </div>
        </section>

        <section
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg"
        >
          <div className="collapse-title font-semibold">
            Can I view my past transactions?
          </div>
          <div className="collapse-content text-sm">
            Yes! Go to 'My Transactions' page to see all your transactions in a
            card layout, with options to update or delete them.
          </div>
        </section>

        <section
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg"
        >
          <div className="collapse-title font-semibold">
            How do I generate reports?
          </div>
          <div className="collapse-content text-sm">
            Navigate to the 'Reports' page to view financial summaries with
            charts. You can also filter transactions by month.
          </div>
        </section>

        <section
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg"
        >
          <div className="collapse-title font-semibold">
            What should I do if I forget my password?
          </div>
          <div className="collapse-content text-sm">
            Currently, the forgot password feature is not implemented to
            simplify the assignment. You can add it later if desired.
          </div>
        </section>

        <section
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg"
        >
          <div className="collapse-title font-semibold">Is my data secure?</div>
          <div className="collapse-content text-sm">
            Yes. All transactions are linked to your account and secured via
            Firebase Authentication and MongoDB backend.
          </div>
        </section>
      </section>
    </div>
  );
};

export default TwoStatic;
