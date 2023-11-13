import New from "./pages/New/New";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import UISample from "./pages/UISample/UISample";
import * as S from "./App.style";
import Profile from "./pages/Profile/Profile";
import ExerciseDiary from "./pages/ExerciseDiary/ExerciseDiary";
import FeedDiary from "./pages/FeedDiary/FeedDiary";
import FeedRoutine from "./pages/FeedRoutine/FeedRoutine";
import FeedDiaryDetail from "./pages/FeedDiaryDetail/FeedDiaryDetail";
import FeedRoutineDetail from "./pages/FeedRoutineDetail/FeedRoutineDetail";
import EditProfile from "./pages/EditProfile/EditProfile";
import SearchUser from "./pages/SearchUesr/SearchUser";
import FeedImport from "./pages/FeedImport/FeedImport";
import FeedNewRoutine from "./pages/FeedNewRoutine/FeedNewRoutine";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./pages/Chat/Chat";
import ChatSearchUser from "./pages/ChatSearchUser/ChatSearchUser";
import ChatRooms from "./pages/ChatRooms/ChatRooms";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import LoginLayout from "./pages/Login/LoginLayout";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import FeedDiaryShare from "./pages/FeedDiaryShare/FeedDiaryShare";
import Admin from "./pages/Admin/Admin";
import LoginLoading from "./pages/LoginLoading/LoginLoading";
import Recovery from "./pages/Recovery/Recovery";
import { useRecoilValue } from "recoil";
import { userInfoState } from "./recoil/userInfoState";

function App() {
  const LoginRoutes = [
    { path: "/", element: <New /> },
    { path: "/ui-sample", element: <UISample /> },
    { path: "/signup", element: <Signup /> },
    { path: "/profile/:nickname", element: <Profile /> },
    { path: "/diary", element: <ExerciseDiary /> },
    { path: "/feed/diary", element: <FeedDiary /> },
    { path: "/feed/diary/share", element: <FeedDiaryShare /> },
    { path: "/feed/routine", element: <FeedRoutine /> },
    { path: "/feed/routine/new", element: <FeedNewRoutine /> },
    { path: "/feed/diary/:id", element: <FeedDiaryDetail /> },
    { path: "/feed/routine/:id", element: <FeedRoutineDetail /> },
    { path: "/profile/edit", element: <EditProfile /> },
    { path: "/feed/search-user", element: <SearchUser /> },
    { path: "/feed/import/:id", element: <FeedImport /> },
    { path: "/chat/:chatId", element: <Chat /> },
    { path: "/chat/search/user", element: <ChatSearchUser /> },
    { path: "/chat/rooms", element: <ChatRooms /> },
    { path: "/admin", element: <Admin /> },
  ];
  const LogOutRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/login/oauth2/callback/kakao", element: <LoginLoading /> },
    { path: "/account/recovery", element: <Recovery /> },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const auth = token != null;
  const userInfo = useRecoilValue(userInfoState);
  console.log("📧", userInfo);
  useEffect(() => {
    if (location.pathname === `/profile/${userInfo.nickname}`) {
      navigate(auth ? `/profile/${userInfo.nickname}` : "login");
    }
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <S.Layout>
      <S.AppWrapper>
        <Routes>
          {LogOutRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<PublicRoute authenticated={auth} element={element} />}
            />
          ))}
          {LoginRoutes.map(({ path, element }) => (
            <>
              <Route element={location.pathname !== "/signup" && <LoginLayout />}>
                <Route
                  key={path}
                  path={path}
                  element={<PrivateRoute authenticated={auth} element={element} />}
                />
              </Route>
            </>
          ))}
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </S.AppWrapper>
    </S.Layout>
  );
}

export default App;
