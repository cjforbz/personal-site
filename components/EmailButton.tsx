import { useRouter } from 'next/router';

const EmailButton = () => {
  const router = useRouter();

  return (
    <div id="button-container">
      <button
        type="button"
        id="email-button"
        onClick={() => router.push('mailto:cjforbes32@gmail.com')}
      >
        <img src="https://www.pinclipart.com/picdir/big/574-5746119_black-and-white-backhoe-clipart.png" />
      </button>
      <p>Email</p>
    </div>
  );
};

export default EmailButton;
