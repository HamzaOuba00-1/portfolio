import PropTypes from 'prop-types';
import thumbs from '../../assets/me/success.png';

const SuccessModal = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-60 p-4">
      <div className="bg-[#961f87] text-white rounded-2xl p-4 sm:p-6 w-11/12 max-w-sm sm:max-w-md text-center space-y-4 shadow-2xl">
      <div className="flex justify-center">
          <img
            src={thumbs}
            alt="Thumbs up"
            className="w-24 h-24 sm:w-40 sm:h-40"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold">Thank you for reaching out!</h2>
        <p className="text-sm sm:text-base">
          Your message has been successfully sent.<br />
          I appreciate your interest and will get back to you as soon as possible.
        </p>
        <p className="font-semibold text-sm sm:text-base">Have a great day!</p>
        <button
          onClick={onClose}
          className="bg-[#ff00df] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md hover:bg-pink-500 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

SuccessModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SuccessModal;
