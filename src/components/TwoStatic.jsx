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
    </div>
  );
};

export default TwoStatic;
