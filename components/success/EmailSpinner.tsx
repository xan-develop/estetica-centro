import React from 'react';
import { Mail } from 'lucide-react';
import { Spinner } from '../ui/spinner';

export const EmailSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-card rounded-lg p-6 shadow-xl flex flex-col items-center gap-4 max-w-sm mx-4 w-full">
        <div className="relative">
          <Mail className="w-12 h-12 text-primary" />
          <div className="absolute -bottom-1 -right-1">
            <Spinner size={20} className="text-primary" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-foreground">Enviando Confirmación</h2>
        <p className="text-muted-foreground text-center">
          Estamos enviando el correo de confirmación de tu compra. Esto solo tomará un momento...
        </p>
      </div>
    </div>
  );
};