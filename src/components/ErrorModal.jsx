import PropTypes from 'prop-types';
import icon from '../assets/error.png';
const ErrorModal = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-60">
      <div className="bg-[#961f87] text-white rounded-2xl p-4 sm:p-6 w-11/12 max-w-sm sm:max-w-md text-center space-y-4 shadow-2xl">
        <div className="flex justify-center">
          <img
            src={icon}
            alt="Error"
            className="w-40 h-40 sm:w-40 sm:h-40"
          />
        </div>
        <h2 className="text-2xl font-bold">Oops!</h2>
        <p>
          Please fill in <strong>all fields</strong> before sending your message.
        </p>
        <button
          onClick={onClose}
          className="bg-white text-red-700 px-6 py-2 rounded-md hover:bg-red-100 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};
ErrorModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ErrorModal;

