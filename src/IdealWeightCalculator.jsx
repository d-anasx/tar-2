import React, { useState } from 'react';
const IdealWeightCalculator = () => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [error, setError] = useState('');
  const [idealWeight, setIdealWeight] = useState(null);

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    setError('');
    setIdealWeight(null);
  };

  const calculateIdealWeight = () => {
    try {
      const heightValue = parseInt(height, 10);
      if (isNaN(heightValue)) {
        throw new Error('La taille doit être un nombre entier.');
      }
      if (heightValue < 150) {
        setError('La taille doit être supérieure ou égale à 150cm.');
        return;
      }
      
      const weight = gender === 'male' 
        ? (heightValue - 100) * 0.9
        : (heightValue - 100) * 0.85;
      
      setIdealWeight(weight.toFixed(2));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Calculateur de Poids Idéal</h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button 
          onClick={() => handleGenderChange('male')}
          className={`p-2 rounded ${gender === 'male' ? 'bg-blue-500' : 'bg-gray-200'}`}
        >
          <span className='text-6xl'>🧍🏻‍♂️</span>
        </button>
        <button 
          onClick={() => handleGenderChange('female')}
          className={`p-2 rounded ${gender === 'female' ? 'bg-pink-500' : 'bg-gray-200'}`}
        >
         <span className='text-6xl'>🧍🏿‍♀️</span>
        </button>
      </div>
      <div className="mb-4">
        <input 
          type="text" 
          value={height} 
          onChange={handleHeightChange} 
          placeholder="Entrez votre taille en cm"
          className="w-full p-2 border rounded"
        />
        <button 
          onClick={calculateIdealWeight}
          className="mt-2 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Calculer
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {idealWeight && <p className="text-green-600 font-bold">Votre poids idéal est : {idealWeight} kg</p>}
    </div>
  );
};

export default IdealWeightCalculator;