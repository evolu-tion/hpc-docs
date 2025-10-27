import React, { useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function SHrCalculator() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState(null);
  const [conversionType, setConversionType] = useState('budgetToSHr'); // Default conversion type

  const conversionRates = [
    { label: 'MedCMU Research', rate: 115 },
    { label: 'CMU Research', rate: 200 },
    { label: 'Outside CMU Research', rate: 300 },
  ];

  const calculate = (conversionRate) => {
    const value = parseFloat(inputValue);
    if (isNaN(value) || value <= 0) {
      setOutputValue('Invalid input amount');
    } else {
      if (conversionType === 'budgetToSHr') {
        setOutputValue((value / conversionRate).toFixed(2) + ' SHr');
      } else {
        setOutputValue((value * conversionRate).toFixed(2) + ' THB');
      }
    }
  };

  return (
    <div>
      <Tabs>
        {conversionRates.map((rate, index) => (
          <TabItem key={index} value={rate.label} label={rate.label}>
            <label htmlFor={`conversionType-${index}`} style={{ fontSize: '16px', marginBottom: '8px', display: 'block' }}>
              Select Conversion Type:
            </label>
            <select
              id={`conversionType-${index}`}
              value={conversionType}
              onChange={(e) => setConversionType(e.target.value)}
              style={{ padding: '10px', fontSize: '16px', width: '100%', marginBottom: '20px' }}
            >
              <option value="budgetToSHr">Budget (THB) to SHr</option>
              <option value="SHrToBudget">SHr to Budget (THB)</option>
            </select>

            <label htmlFor={`inputValue-${index}`} style={{ fontSize: '16px', marginBottom: '8px', display: 'block' }}>
              Enter Value:
            </label>
            <input
              id={`inputValue-${index}`}
              type="number"
              placeholder={conversionType === 'budgetToSHr' ? 'Enter amount in THB' : 'Enter amount in SHr'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ padding: '10px', fontSize: '16px', width: '100%', marginBottom: '20px' }}
            />

            <button
              onClick={() => calculate(rate.rate)}
              style={{
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              Calculate
            </button>

            {outputValue !== null && (
              <div style={{ marginTop: '30px', fontSize: '18px' }}>
                {typeof outputValue === 'string' ? (
                  <p style={{ color: 'red' }}>{outputValue}</p>
                ) : (
                  <p>Converted Value: <strong>{outputValue}</strong></p>
                )}
              </div>
            )}
          </TabItem>
        ))}
      </Tabs>
    </div>
  );
}
