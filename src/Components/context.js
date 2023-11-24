import React, { createContext, useContext } from 'react';

const UserIdContext = createContext();

export const useUserId = () => useContext(UserIdContext);

export default UserIdContext;