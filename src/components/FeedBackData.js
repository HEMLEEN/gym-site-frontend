import React, { useState } from 'react';
import axios from '../api'
const Feedback = () => {
  // const base_url = process.env.REACT_APP_API_URL || 'https://lifechangefitness-gym.onrender.com/api'
const [userData, setUserData] = useState({
  name: '',
  email: '',
  message: '',
  address: '',
  weightGain: false,
  weightLoss: false,
  attendance: '',
});

const handleClick = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/api`, userData);
    setUserData({
      name: '',
      email: '',
      message: '',
      address: '',
      weightGain: false,
      weightLoss: false,
      attendance: '',
    });
  } catch (error) {
    console.error('Error:', error);
  }
}
  return (
    <div className='container'>
      <div className='card'>
        <div className='inner-box'>
          <div className='card-front'>
            <h2>Feedback  </h2>
            <img src='https://lifechangefitnes.netlify.app/favicon.jpg' alt='gym_logo' className='gym-logo'/>
            
            <form>
            <input
                type='date'
                className='date'
                name='attendance'
                value={userData.attendance}
                onChange={(e) =>
                  setUserData({ ...userData, attendance: e.target.value })
                }
              />

<input
                    type='checkbox'
                    className='check-box'
                    name='weight-gain'
                    checked={userData.weightGain}
                    onChange={(e) =>
                    setUserData({ ...userData, weightGain: e.target.checked })
                    }
                />
                <label htmlFor='weight-gain' className='weight-gain'>Weight Gain</label>
                <input
                    type='checkbox'
                    className='check-box'
                    name='weight-loss'
                    checked={userData.weightLoss}
                    onChange={(e) =>
                    setUserData({ ...userData, weightLoss: e.target.checked })
                    }
                />
              <label htmlFor='weight-loss' className='weight-loss'>Weight Loss</label>
              <input
                type='text'
                className='input-box'
                name='name'
                id='name'
                placeholder='Enter your name'
                required
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              <input
                type='email'
                className='input-box'
                name='email'
                id='email'
                placeholder='Enter your email'
                required
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <input
                type='text'
                className='input-box'
                name='message'
                id='message'
                placeholder='Give me some Feedback'
                required
                value={userData.message}
                onChange={(e) =>
                  setUserData({ ...userData, message: e.target.value })
                }
              />
               
              
              <button type='submit' className='submit-btn' onClick={handleClick}>
                Submit
              </button>
              <input type='checkbox' />
              <span>Remember Me</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
