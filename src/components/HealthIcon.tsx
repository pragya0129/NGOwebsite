import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

const HealthIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    fill="#000000"
    width="25px"
    height="25px"
    viewBox="0 0 50 50"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    overflow="inherit"
    {...props}
  >
    <path d="M49 17c0-.55-.45-1-1-1h-13c-.55 0-1-.45-1-1v-13c0-.55-.45-1-1-1h-16c-.55 0-1 .45-1 1v13c0 .55-.45 1-1 1h-13c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h13c.55 0 1 .45 1 1v13c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-13c0-.55.45-1 1-1h13c.55 0 1-.45 1-1v-16z" />
  </svg>
);
export default HealthIcon;
