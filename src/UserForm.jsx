import React from 'react';

const UserForm = ({ userData, handleChange }) => {
    return(
      <form className="user-form">
        <input type="text" name="firstName" className="user-form__input" value={userData}
        onChange={handleChange}/>
        <input type="text" name="lastName" className="user-form__input" value={userData}
        onChange={handleChange}/>
      </form>
    );
}

export default UserForm;