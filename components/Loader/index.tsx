type Props = {
  size?: "small" | "normal" | "big";
};

const Loader = ({ size = "normal" }: Props) => {
  return <div className={`loader size-${size}`}></div>;
};

export default Loader;
