import { useSelector } from "react-redux";
import "./Footer.css";
import { selectApp } from "features/appSlice";
export default function Footer() {
  const app = useSelector(selectApp);
  return (
    <footer>
      <p>© 2023 {app.name}</p>
    </footer>
  );
}
