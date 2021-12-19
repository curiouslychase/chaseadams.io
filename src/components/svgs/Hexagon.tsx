type Props = { width?: number; height: number };
export const Hexagon = ({ width = 621, height = 709 }: Props) => {
  return (
    <div className={`w-[${width}px] h-[${height}px]`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 621 709"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M295.5 4.66025C304.782 -0.698736 316.218 -0.698729 325.5 4.66025L605.97 166.59C615.252 171.949 620.97 181.853 620.97 192.571V516.43C620.97 527.147 615.252 537.051 605.97 542.41L325.5 704.34C316.218 709.699 304.782 709.699 295.5 704.34L15.0299 542.41C5.74786 537.051 0.0299072 527.147 0.0299072 516.429V192.57C0.0299072 181.853 5.74787 171.949 15.0299 166.59L295.5 4.66025Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};