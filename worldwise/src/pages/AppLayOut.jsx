import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";

function AppLayOut() {
  return (
    <div>
      <h1>
        <PageNav />
        <AppNav />
        <p>APP</p>
      </h1>
    </div>
  );
}

export default AppLayOut;
