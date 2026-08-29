// src/features/userProfile/hooks/useUser.js
import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import { useAuthContext } from '../../../context/AuthContext';

export const useUser = () => {
  const { user: authUser, isAuthenticated, saveUser } = useAuthContext();
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!isAuthenticated || !authUser) {
        setLoading(false);
        setError('کاربر وارد نشده است');
        return;
      }

      try {
        setLoading(true);

        const { data, error: supabaseError } = await supabase
          .from('Users')
          .select('*')
          .eq('Phone', authUser.phone)
          .single();

        if (supabaseError) throw new Error(supabaseError.message);

        if (data) {
          setUser({
            id: data.id,
            firstName: data.Full_Name?.split(' ')[0] || '',
            lastName: data.Full_Name?.split(' ')[1] || '',
            email: data.Email || '',
            phone: data.Phone,
            nationalCode: data.National_Code || '',
            gender: data.Gender || '',
          });

          const storedAddresses = data.Addresses || data.addresses || [];
          setAddresses(storedAddresses);
        }

        setError(null);
      } catch (err) {
        setError(err.message || 'خطا در دریافت اطلاعات کاربر');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [isAuthenticated, authUser]);

  const updateUser = async (updatedData) => {
    if (!authUser) return;

    try {
      const fullName = `${updatedData.firstName || ''} ${updatedData.lastName || ''}`.trim();
      
      const { error } = await supabase
        .from('Users')
        .update({
          Full_Name: fullName,
          Email: updatedData.email || authUser.email,
          National_Code: updatedData.nationalCode || '',
          Gender: updatedData.gender || '',
        })
        .eq('Phone', authUser.phone);

      if (error) throw new Error(error.message);

      // آپدیت LocalStorage (AuthContext)
      saveUser({
        id: authUser.id,
        phone: authUser.phone,
        fullName: fullName,
      });

      setUser((prev) => ({
        ...prev,
        ...updatedData,
        firstName: updatedData.firstName,
        lastName: updatedData.lastName,
        email: updatedData.email,
        nationalCode: updatedData.nationalCode,
        gender: updatedData.gender,
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  const addAddress = async (address) => {
    if (!authUser) return;

    try {
      const { data: userData } = await supabase
        .from('Users')
        .select('Addresses')
        .eq('Phone', authUser.phone)
        .single();

      const currentAddresses = userData?.Addresses || [];
      const newAddresses = [...currentAddresses, address];

      const { error } = await supabase
        .from('Users')
        .update({ Addresses: newAddresses })
        .eq('Phone', authUser.phone);

      if (error) throw new Error(error.message);

      setAddresses((prev) => [...prev, address]);
    } catch (err) {
      setError(err.message);
    }
  };

  const removeAddress = async (addressId) => {
    if (!authUser) return;

    try {
      const { data: userData } = await supabase
        .from('Users')
        .select('Addresses')
        .eq('Phone', authUser.phone)
        .single();

      const currentAddresses = userData?.Addresses || [];
      const newAddresses = currentAddresses.filter((item) => item.id !== addressId);

      const { error } = await supabase
        .from('Users')
        .update({ Addresses: newAddresses })
        .eq('Phone', authUser.phone);

      if (error) throw new Error(error.message);

      setAddresses((prev) => prev.filter((item) => item.id !== addressId));
    } catch (err) {
      setError(err.message);
    }
  };

  return { user, addresses, loading, error, updateUser, addAddress, removeAddress };
};