import { useEffect, useState } from "react";
import Desktop from "./imports/Desktop7-6/index";
import OrionCloudMaxPage from "./pages/OrionCloudMaxPage";
import BlackBerryAtHocPage from "./pages/BlackBerryAtHocPage";
import JassxLoanReviewPage from "./pages/JassxLoanReviewPage";

const DESIGN_WIDTH = 1440;
const HOME_HEIGHT = 4887;
const ORION_CLOUDMAX_HEIGHT = 9100;
const BLACKBERRY_ATHOC_HEIGHT = 7292;
const JASSX_LOAN_REVIEW_HEIGHT = 6334;

export default function App() {
  const [scale, setScale] = useState(1);
  const isOrionCloudMaxPage = window.location.pathname === "/orion-cloudmax";
  const isBlackBerryAtHocPage = window.location.pathname === "/blackberry-athoc";
  const isJassxLoanReviewPage = window.location.pathname === "/jassx-loan-review";
  const designHeight = isOrionCloudMaxPage
    ? ORION_CLOUDMAX_HEIGHT
    : isBlackBerryAtHocPage
      ? BLACKBERRY_ATHOC_HEIGHT
      : isJassxLoanReviewPage
        ? JASSX_LOAN_REVIEW_HEIGHT
      : HOME_HEIGHT;

  useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_WIDTH);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ width: "100vw", height: `${designHeight * scale}px`, overflowX: "hidden" }}>
      <div
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${designHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {isOrionCloudMaxPage ? (
          <OrionCloudMaxPage />
        ) : isBlackBerryAtHocPage ? (
          <BlackBerryAtHocPage />
        ) : isJassxLoanReviewPage ? (
          <JassxLoanReviewPage />
        ) : (
          <Desktop />
        )}
      </div>
    </div>
  );
}
