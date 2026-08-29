import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabase';
import { useAuthContext } from '../../../context/AuthContext';
import { toast } from 'sonner';

const normalizePhone = (phone) => {
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('0')) cleaned = cleaned.slice(1);
  return `+98${cleaned}`;
};

export const useAuth = () => {
  const navigate = useNavigate();
  const { saveUser, logout: contextLogout } = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});


  const checkUserExists = async (rawPhone) => {
    setIsSubmitting(true);
    setAuthError(null);
    setFieldErrors({});

    try {
      const fullPhone = normalizePhone(rawPhone);

      const { data, error } = await supabase
        .from('Users') 
        .select('*')
        .eq('Phone', fullPhone) 
        .single();

      if (error && error.code === 'PGRST116') {
        navigate('/Sign-up', { state: { fullPhone } });
        return;
      }

      if (error) {
        throw new Error(error.message);
      }

      if (data) {

        navigate('/Verify-code', { state: { phone: fullPhone } });
      }
    } catch (error) {
      setAuthError(error.message || 'خطا در بررسی کاربر');
    } finally {
      setIsSubmitting(false);
    }
  };


  const loginWithPassword = async (phone, password) => {
    setIsSubmitting(true);
    setAuthError(null);

    try {
      const { data: user, error } = await supabase
        .from('Users')
        .select('*')
        .eq('Phone', phone) 
        .single();

      if (error || !user) {
        toast.warning('کاربری با این نام یافت نشد')
        throw new Error('کاربری با این شماره یافت نشد');
      }

      if (user.Password === password) {
        saveUser({
          id: user.id,
          phone: user.Phone, 
          fullName: user.Full_Name, 
        });

        toast.success('ورود با موفقیت انجام شد');
        navigate('/');
      } else {
        toast.error('رمز عبور اشتباه است')
        throw new Error('رمز عبور اشتباه است');
      }
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  const registerUser = async (data) => {
    const { fullName, password, phone } = data;

    let cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.startsWith('0')) cleanedPhone = cleanedPhone.slice(1);
    const fullPhone = `+98${cleanedPhone}`;

    setIsSubmitting(true);
    setAuthError(null);
    setFieldErrors({});

    try {
      const { error } = await supabase
        .from('Users')
        .insert([{ 
          Phone: fullPhone, 
          Full_Name: fullName, 
          Password: password 
        }]);

      if (error) {
        if (error.code === '23505') {
          setFieldErrors({ phone: 'این شماره موبایل قبلاً ثبت شده است' });
          return;
        }
        toast.error(error.message)
        throw new Error(error.message);
      }

      toast.success('ثبت نام با موفقیت انجام شد');
      navigate('/Verify-code', { state: { phone: fullPhone } });
    } catch (error) {
      setAuthError(error.message || 'خطا در ثبت‌نام');
    } finally {
      setIsSubmitting(false);
    }
  };

  const logout = () => {
    contextLogout(); 
    navigate('/Sign-in');
  };

  return {
    isSubmitting,
    authError,
    fieldErrors,
    checkUserExists,
    loginWithPassword,
    registerUser,
    logout,
  };
};