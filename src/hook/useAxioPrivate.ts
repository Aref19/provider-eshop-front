import { useEffect } from "react";
import { useAuth } from "./ContextHook";
import { AuthInContext } from "../context/LoginContext";
import useReferech from "./useRefresh";
import { axiosPrivate } from "../api/Axio";
import { config } from "process";

function useAxioPrvate(contentType?: string) {
    const { auth } = useAuth() as AuthInContext
    const refersh = useReferech();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(config => {
            if (config.headers['Content-Type'] == "") {
                config.headers['Content-Type'] = contentType
            }
            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = `Bearer ${auth?.access_Token}`
                console.log("here1", auth?.access_Token);

            }
            return config
        }, (error) => Promise.reject(error)
        )
        const resposeIntrcepter = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                console.log("here3");
                const prevreqezuest = error?.config
                if (error?.response?.status == 403 && !prevreqezuest?.sent) {
                    console.log("here2");
                    prevreqezuest.sent = true;
                    const access_Token = await refersh();
                    prevreqezuest.headers['Authorization'] = `Bearer  ${access_Token}`
                    return axiosPrivate(prevreqezuest);

                }
                return Promise.reject(error)
            }

        );
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(resposeIntrcepter);
        }



    }, [auth])
    return axiosPrivate;
}

export default useAxioPrvate;