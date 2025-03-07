import React from 'react';

interface RedsysFormProps {
  url: string;
  Ds_SignatureVersion: string;
  Ds_MerchantParameters: string;
  Ds_Signature: string;
  amount: string;
  currency: string;
}

const RedsysForm: React.FC<RedsysFormProps> = ({
  url,
  Ds_SignatureVersion,
  Ds_MerchantParameters,
  Ds_Signature,
  amount,
  currency,
}) => {
  return (
    <form id="redsys-form" action={url} method="post" className="flex flex-col items-center p-4 bg-card text-card-foreground rounded-md">
      <input type="hidden" name="Ds_SignatureVersion" value={Ds_SignatureVersion} />
      <input type="hidden" name="Ds_MerchantParameters" value={Ds_MerchantParameters} />
      <input type="hidden" name="Ds_Signature" value={Ds_Signature} />
      <button type="submit" className="mt-4 px-6 py-2 w-full bg-green-800 text-primary-foreground font-semibold rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
        Pagar {amount} {currency}
      </button>
    </form>
  );
};

export default RedsysForm;