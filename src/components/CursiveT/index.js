import "./index.scss"

const CursiveT = () => {
    return (
        <span className="cursive">
            <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M 50 50 Q 100 -20, 150 50 M 100 50 Q 100 150, 50 170"
                stroke="black"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="draw"
            />
            </svg>
        </span>

        
      );
};

export default CursiveT;