import React from 'react';

const OutLine = () => {
    return (
      <div className="grid md:grid-cols-3 text-center gap-4">
        <div className="app-card p-4 rounded">💰 Track Income</div>
        <div className="app-card p-4 rounded">📉 Monitor Expenses</div>
        <div className="app-card p-4 rounded">📊 View Reports</div>
      </div>
    );
};

export default OutLine;