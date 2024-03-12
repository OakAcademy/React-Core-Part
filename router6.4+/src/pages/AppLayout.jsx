import { Outlet, useNavigation } from "react-router-dom";
import Back from "../components/Back";
import Menu from "../components/Menu";
import Loader from "../components/Loader";
const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="appLayoutWrapper">
      <Menu />
      {isLoading && <Loader />}
      <main className="mainWrapper">
        <Outlet />
      </main>
      <Back />
    </div>
  );
};

export default AppLayout;
