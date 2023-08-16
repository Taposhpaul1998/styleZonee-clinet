import { useSelector } from "react-redux"

const useAuth = () => {
    const auth = useSelector(state => state.user.auth)
    if (auth?.accessToken && auth?.uid) {
        return true
    } else {
        return false;
    }

}
export default useAuth;