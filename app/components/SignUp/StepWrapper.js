import styles from "./SignUp.module.scss";
export default function StepWrapper({ title, step, stepsCount, onClose, children }) {
  return (
    <div
      className={`bg-white p-6 lg:p-8 2xl:p-12  rounded-t-[20px] lg:rounded-b-[20px] w-full ${
        styles?.[`step-${step}`]
      }`}>
      {step <= stepsCount && (
        <div className="flex justify-between items-center gap-5 mb-8">
          <h6 className={styles.title}>
            {title}{" "}
            <span>
              {step}/{stepsCount}
            </span>
          </h6>

          <button onClick={onClose} className="primary-gradient p-2.5 rounded-[10px]">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.7937 15.6452L11.6437 9.47178L17.8077 3.37803C18.0608 3.1249 18.0608 2.7124 17.8077 2.45928L16.0546 0.696777C15.9327 0.574902 15.7687 0.509277 15.5952 0.509277C15.4218 0.509277 15.2577 0.57959 15.1358 0.696777L8.9999 6.77178L2.85459 0.701465C2.73271 0.57959 2.56865 0.513965 2.39521 0.513965C2.22178 0.513965 2.05771 0.584278 1.93584 0.701465L0.187402 2.46397C-0.0657227 2.71709 -0.0657227 3.12959 0.187402 3.38272L6.35147 9.47647L0.206152 15.6452C0.0842774 15.7671 0.013965 15.9312 0.013965 16.1046C0.013965 16.278 0.0795899 16.4421 0.206152 16.564L1.95928 18.3265C2.08584 18.453 2.2499 18.5187 2.41865 18.5187C2.58271 18.5187 2.75146 18.4577 2.87803 18.3265L8.9999 12.1765L15.1265 18.3218C15.253 18.4483 15.4171 18.514 15.5858 18.514C15.7499 18.514 15.9187 18.453 16.0452 18.3218L17.7983 16.5593C17.9202 16.4374 17.9905 16.2733 17.9905 16.0999C17.9858 15.9312 17.9155 15.7671 17.7937 15.6452Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      )}
      {children}
    </div>
  );
}
