import Axio from "../api/Axio"
import { useAuth } from "./ContextHook"
import { Auth, AuthInContext } from "../context/LoginContext"


function useReferech() {
    const { auth, setAuth } = useAuth() as AuthInContext;
    const params = new URLSearchParams(); // wen send application/x-www-form-urlencoded
    params.append('client_id', 'eshop_backend');
    params.append('client_secret', 'T2hxnRgPTXhZsjz2v3Q7Oq1PziciyyOU');
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', auth?.refresh_token ? auth?.refresh_token : " ")
    const userefrsh = async () => {
        const response = await Axio.post("/auth/token", params, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            withCredentials: true
        });
        setAuth((pre: Auth|null) => {
            if (pre != null) {
                return { ...pre, access_Token: response.data.access_Token }
            } else {
                return null
            }

        })
        return response.data.access_token
    }
    return userefrsh



}

export default useReferech;