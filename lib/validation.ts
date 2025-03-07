import { z } from 'zod';

const schema = z.object({
   fullName: z.string().min(3, { message: 'El nombre completo debe tener al menos 3 caracteres' }).regex(/^[a-zA-Z\s]*$/, { message: 'El nombre completo no es válido' }),
   phone: z.string().length(9, { message: 'El teléfono debe tener 9 números' }).regex(/^\d+$/, { message: 'El teléfono debe contener solo números' }),
   email: z.string().email({ message: 'El correo electrónico no es válido' }),
});

export const validateForm = async (
   fullName: string,
   phone: string,
   email: string,
   setFullNameError: (error: string | null) => void,
   setPhoneError: (error: string | null) => void,
   setEmailError: (error: string | null) => void
 ): Promise<boolean> => {
   try {
     schema.parse({ fullName, phone, email });
     setFullNameError(null);
     setPhoneError(null);
     setEmailError(null);
     return true;
   } catch (error: any) {
     error.errors.forEach((err: any) => {
       if (err.path[0] === 'fullName') {
         setFullNameError(err.message);
       } else if (err.path[0] === 'phone') {
         setPhoneError(err.message);
       } else if (err.path[0] === 'email') {
         setEmailError(err.message);
       }
     });
     return false;
   }
 };
 