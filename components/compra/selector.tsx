import React from 'react';
import { Plus } from 'lucide-react';
import { Treatment } from '@/lib/types';
 
const availableTreatments: Treatment[] = [
  { id: '1', title: 'Masaje Terapéutico', price: 60 },
  { id: '2', title: 'Tratamiento Facial', price: 45 },
  { id: '3', title: 'Depilación Láser', price: 80 },
  { id: '4', title: 'Manicura Spa', price: 35 },
];

interface Props {
  onAddTreatment: (treatment: Treatment) => void;
}

export const TreatmentSelector: React.FC<Props> = ({ onAddTreatment }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Añadir más tratamientos</h3>
      <div className="space-y-3">
        {availableTreatments.map((treatment) => (
          <div
            key={treatment.id}
            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
          >
            <div>
              <h4 className="font-medium">{treatment.title}</h4>
              <p className="text-gray-600">{treatment.price}€</p>
            </div>
            <button
              onClick={() => onAddTreatment(treatment)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
            >
              <Plus size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};