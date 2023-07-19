import React, { useState } from 'react';
import axios from 'axios'
const Feedback = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    message: '',
    phone:'',
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
        contact:'',
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
        <div className='form-group'>
          <div className='card-front'>
            <h2>Feedback  </h2>
            <img src='https://lifechangefitnes.netlify.app/favicon.jpg' alt='gym_logo' className='gym-logo' />
            <div className="form-group">
              <input
                type='date'
                className='date'
                name='attendance'
                value={userData.attendance}
                onChange={(e) =>
                  setUserData({ ...userData, attendance: e.target.value })
                }
              />
              </div>
              <div className="form-group">
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
              </div>
              <div className="form-group">
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
              </div>
              <div className="form-group">
                <input
                  type='number'
                  className='input-box'
                  name='number'
                  id='number'
                  placeholder='pickup your number'
                  required
                  value={userData.contact}
                  onChange={(e) =>
                    setUserData({ ...userData, contact: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <textarea
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
                ></textarea>
              </div>
              <button type='submit' className='submit-btn' onClick={handleClick}>
                Submit
              </button>
            </div>

        </div>
      </div>
    </div>
  );
};
export default Feedback;
