// src/components/BiometricSheet.jsx
import { useState } from 'react';
import { SuccessAnimation } from './SuccessAnimation';

export const BiometricSheet = ({ onClose, onSave, lastBiometrics }) => {
  const [biometricData, setBiometricData] = useState({
    weight: lastBiometrics?.weight || '',
    systolic: lastBiometrics?.systolic || '',
    diastolic: lastBiometrics?.diastolic || '',
    sleep: lastBiometrics?.sleep || '',
    restingHeartRate: lastBiometrics?.restingHeartRate || '',
    mood: lastBiometrics?.mood || 'good',
    notes: ''
  });
  const [showAnimation, setShowAnimation] = useState(false);

  const handleInputChange = (field, value) => {
    setBiometricData({
      ...biometricData,
      [field]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAnimation(true);
    // onSave and onClose will be called after animation completes
  };

  const handleAnimationComplete = () => {
    onSave(biometricData);
    onClose();
  };

  return (
    <>
      <div className="sheet-container">
        <div className="sheet-content">
          <div className="sheet-header">
            <h2>Track Biometrics</h2>
            <button className="close-button" onClick={onClose}>×</button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Weight (lbs)</label>
              <input
                type="number"
                min="0"
                step="0.1"
                placeholder="Enter your weight"
                value={biometricData.weight}
                onChange={(e) => handleInputChange('weight', parseFloat(e.target.value))}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Systolic BP</label>
                <input
                  type="number"
                  min="0"
                  placeholder="120"
                  value={biometricData.systolic}
                  onChange={(e) => handleInputChange('systolic', parseInt(e.target.value))}
                />
              </div>
              
              <div className="form-group">
                <label>Diastolic BP</label>
                <input
                  type="number"
                  min="0"
                  placeholder="80"
                  value={biometricData.diastolic}
                  onChange={(e) => handleInputChange('diastolic', parseInt(e.target.value))}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Sleep (hours)</label>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  placeholder="Hours of sleep"
                  value={biometricData.sleep}
                  onChange={(e) => handleInputChange('sleep', parseFloat(e.target.value))}
                />
              </div>
              
              <div className="form-group">
                <label>Resting Heart Rate</label>
                <input
                  type="number"
                  min="0"
                  placeholder="BPM"
                  value={biometricData.restingHeartRate}
                  onChange={(e) => handleInputChange('restingHeartRate', parseInt(e.target.value))}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Mood</label>
              <select
                value={biometricData.mood}
                onChange={(e) => handleInputChange('mood', e.target.value)}
              >
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="tired">Tired</option>
                <option value="stressed">Stressed</option>
                <option value="sore">Sore</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Notes</label>
              <textarea
                placeholder="Additional health notes"
                value={biometricData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
              ></textarea>
            </div>
            
            <div className="sheet-actions">
              <button type="button" className="cancel-button" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="save-button">
                Save Biometrics
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Success Animation */}
      <SuccessAnimation 
        show={showAnimation} 
        onComplete={handleAnimationComplete}
      />
    </>
  );
};