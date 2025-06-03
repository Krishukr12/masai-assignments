import { BottomMainRight } from "./BottomMainRight";

export const Child1 = ({ userName }: { userName: string }) => {
  return (
    <div style={{ height: "50px", minWidth: "160px" }}>
      <BottomMainRight userName={userName} />
    </div>
  );
};
