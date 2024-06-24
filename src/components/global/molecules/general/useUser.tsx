'use client'
import User from '@/utils/userRoles/user';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export function useUser(): User | null {
  const [user, setUser] = useState<User | null>(null);
  const userData = useSelector((state: any) => state?.user?.user);

  useEffect(()=>{
    if (userData) {
      const newUser = new User(userData);
      setUser(newUser);
    }
  }, [userData]);
  
  return user;
}