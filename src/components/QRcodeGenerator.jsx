import QRCode from 'react-qr-code';

const QRcodeGenerator = ({ valueQR }) => {
  const link = "otpauth://totp/API?secret={{KEY}}";
  const key = valueQR;

	return <QRCode value={link.replace(/{{KEY}}/g, key)} size={150} />;
};

export default QRcodeGenerator;
