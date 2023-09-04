import { block } from "million/react";
import { ReactComponent as ViteLogoTest } from "../../assets/vite.svg";

const ViteLogo = block(() => {
  return (
    <a href="https://vitejs.dev" target="_blank">
      <ViteLogoTest />
    </a>
  );
});

export default ViteLogo;
