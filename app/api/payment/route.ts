import { NextRequest, NextResponse } from 'next/server';
import {v4 as uuidv4} from 'uuid';
import { cookies } from 'next/headers';
import { createRedsysAPI, TRANSACTION_TYPES, randomTransactionId, SANDBOX_URLS, CURRENCIES } from 'redsys-easy';
import Decimal from 'decimal.js';

const {
  createRedirectForm,
  processRestNotification
} = createRedsysAPI({
  urls: SANDBOX_URLS,
  secretKey: process.env.REDSYS_SECRET_KEY as string
});

const merchantInfo = {
  DS_MERCHANT_MERCHANTCODE: process.env.REDSYS_MERCHANT_CODE as string,
  DS_MERCHANT_TERMINAL: process.env.REDSYS_TERMINAL as string,
} as const;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // Extraer los parámetros de la consulta
  const amount = searchParams.get('amount') || '49.99';
  const fullName = searchParams.get('fullName') || '';
  const currency = searchParams.get('currency') || 'EUR';
  console.log('amount', amount);
  console.log('fullName', fullName);
  const orderId = randomTransactionId();

  const currencyInfo = CURRENCIES[currency as keyof typeof CURRENCIES];
  const redsysAmount = new Decimal(amount).mul(Math.pow(10, currencyInfo.decimals)).round().toFixed(0);
  const redsysCurrency = currencyInfo.num;

  const form = createRedirectForm({
    ...merchantInfo,
    DS_MERCHANT_ORDER: orderId,
    DS_MERCHANT_AMOUNT: redsysAmount,
    DS_MERCHANT_CURRENCY: redsysCurrency,
    DS_MERCHANT_MERCHANTNAME: 'Chirmate Lixchel',
    DS_MERCHANT_TITULAR: fullName,
    DS_MERCHANT_PRODUCTDESCRIPTION: 'Compra de prueba para la clinica',
    DS_MERCHANT_URLOK: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    DS_MERCHANT_URLKO: `${process.env.NEXT_PUBLIC_BASE_URL}/error`,
    DS_MERCHANT_TRANSACTIONTYPE: TRANSACTION_TYPES.AUTHORIZATION
  });
  console.log('form', form);
  // Devolver solo los datos necesarios para el componente
  return NextResponse.json({
    formData: {
      Ds_SignatureVersion: form.body.Ds_SignatureVersion,
      Ds_MerchantParameters: form.body.Ds_MerchantParameters,
      Ds_Signature: form.body.Ds_Signature,
      url: form.url
    },
    orderId,
    amount,
    currency
  });
}

export async function POST(req: NextRequest) {
  try {
    const { amount, fullName, currency, carrito } = await req.json();

    console.log('amount', amount);
    console.log('fullName', fullName);
    console.log('carrito', carrito);

    const orderId = randomTransactionId();
    const totalPrice = carrito.reduce((acc: number, item: any) => acc + item.price, 0);
    const currencyInfo = CURRENCIES[currency as keyof typeof CURRENCIES];
    const redsysAmount = new Decimal(amount).mul(Math.pow(10, currencyInfo.decimals)).round().toFixed(0);
    const redsysCurrency = currencyInfo.num;
    const csrfToken = uuidv4();
    cookies().set('csrfToken', csrfToken, { httpOnly: true, secure: true, maxAge: 60 * 15 });
    // Concatenar los nombres de los productos del carrito
    const productDescription = `Pedido de ${carrito.length} productos`;

    const form = createRedirectForm({
      ...merchantInfo,
      DS_MERCHANT_ORDER: orderId,
      DS_MERCHANT_AMOUNT: redsysAmount,
      DS_MERCHANT_CURRENCY: redsysCurrency,
      DS_MERCHANT_MERCHANTNAME: 'Chirmate Lixchel',
      DS_MERCHANT_TITULAR: fullName,
      DS_MERCHANT_PRODUCTDESCRIPTION: productDescription,
      DS_MERCHANT_URLOK: `${process.env.NEXT_PUBLIC_BASE_URL}/success?csrfToken=${csrfToken}`,
      DS_MERCHANT_URLKO: `${process.env.NEXT_PUBLIC_BASE_URL}/error`,
      DS_MERCHANT_TRANSACTIONTYPE: TRANSACTION_TYPES.AUTHORIZATION
    });
    console.log('form', form);
    // Devolver solo los datos necesarios para el componente
    return NextResponse.json({
      formData: {
        Ds_SignatureVersion: form.body.Ds_SignatureVersion,
        Ds_MerchantParameters: form.body.Ds_MerchantParameters,
        Ds_Signature: form.body.Ds_Signature,
        url: form.url
      },
      orderId,
      amount,
      currency
    });
  } catch (error) {
    console.error('Error en el endpoint /api/payment:', error);
    return NextResponse.json({ error: 'Error al procesar el pago' }, { status: 500 });
  }
}
