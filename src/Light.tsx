interface Props {
  variant: "green" | "yellow" | "crimson";
}

export default function Light({ variant = "crimson" }: Props) {
  return (
    <div
      style={{
        background: variant,
        width: "80px",
        height: "80px",
        borderRadius: "50%",
      }}
    ></div>
  );
}
